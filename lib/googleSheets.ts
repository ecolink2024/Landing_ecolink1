import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const TAB_NAME = process.env.GOOGLE_SHEETS_TAB_NAME ?? 'Leads';
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    'Google Sheets env vars missing. Set GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SHEETS_CLIENT_EMAIL and GOOGLE_SHEETS_PRIVATE_KEY in .env.local',
  );
}

let sheetsClient: ReturnType<typeof google.sheets> | null = null;

async function getSheetsClient() {
  if (sheetsClient) return sheetsClient;

  if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
    throw new Error('Google Sheets configuration is incomplete');
  }

  const auth = new google.auth.JWT({
    email: CLIENT_EMAIL,
    key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  sheetsClient = google.sheets({ version: 'v4', auth });
  return sheetsClient;
}

export type LeadSource = 'home' | 'empresas' | 'casas';

export type LeadPayload = {
  nombre: string;
  email: string;
  telefono: string;
  consulta: string;
  source: LeadSource;
};

function mapSourceToTipoLead(source: LeadSource): string {
  if (source === 'empresas') return 'Empresa';
  if (source === 'casas') return 'Casa';
  return '';
}

export async function appendLeadRow(payload: LeadPayload) {
  const sheets = await getSheetsClient();

  const values = [
    [
      payload.nombre ?? '',
      payload.email ?? '',
      payload.telefono ?? '',
      payload.consulta ?? '',
      mapSourceToTipoLead(payload.source),
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID!,
    range: `${TAB_NAME}!A:E`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values,
    },
  });
}

