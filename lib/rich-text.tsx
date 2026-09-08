import type { ReactNode } from 'react';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Convierte `**negrita**` a <strong>, escapando el resto para evitar XSS. */
export function formatInlineRichText(text: string): string {
  const escaped = escapeHtml(text);
  return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function renderInlineNodes(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let part = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(<strong key={`${keyPrefix}-b-${part++}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

type RichTextProps = {
  text: string;
  className?: string;
};

/** Renderiza contenido con saltos de línea y negrita vía **texto**. */
export function RichText({ text, className }: RichTextProps) {
  const paragraphs = text.replace(/\r\n/g, '\n').split(/\n{2,}/);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => {
        const lines = paragraph.split('\n');
        return (
          <p key={`p-${index}`} className={index > 0 ? 'mt-4' : undefined}>
            {lines.map((line, lineIndex) => (
              <span key={`l-${index}-${lineIndex}`}>
                {lineIndex > 0 ? <br /> : null}
                {renderInlineNodes(line, `${index}-${lineIndex}`)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
