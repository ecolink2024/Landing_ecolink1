'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('password') ?? '')
    };

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setLoading(false);

      if (!response.ok) {
        let msg = 'No se pudo iniciar sesión.';
        try {
          const data = await response.json();
          msg = data.error ?? msg;
        } catch {}
        setError(msg);
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch {
      setLoading(false);
      setError('Error de conexión. Intentá de nuevo.');
    }
  }

  return (
    <main className="min-h-screen bg-eco-forest flex items-center justify-center px-4">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand */}
        <div className="flex flex-col items-center mb-8">
          <img src="/ecolink-logo.png" alt="EcoLINK" className="h-16 w-auto object-contain mb-3" />
          <p className="text-eco-beige/70 text-xs uppercase tracking-[0.2em] font-bold">Panel de administración</p>
        </div>

        {/* Card */}
        <div className="bg-eco-beige rounded-xl shadow-2xl p-8">
          <h1 className="text-eco-forest text-2xl font-extrabold mb-8 text-center tracking-tight">Ingresar</h1>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="admin@ecolink.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-eco-forest text-sm focus:outline-none focus:ring-2 focus:ring-eco-green/30 focus:border-eco-green transition-all bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-eco-forest text-sm focus:outline-none focus:ring-2 focus:ring-eco-green/30 focus:border-eco-green transition-all bg-white"
              />
            </div>

            {error && (
              <p className="text-sm text-eco-pink font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-eco-pink text-white font-extrabold py-3.5 rounded-full uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-50 mt-3 shadow-lg"
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
