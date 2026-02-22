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

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.error ?? 'No se pudo iniciar sesión.');
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-eco-forest flex items-center justify-center px-4">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="text-eco-beige text-4xl font-black tracking-tighter mb-1">EcoLINK</div>
          <p className="text-eco-light-green text-xs uppercase tracking-widest font-bold">Panel de administración</p>
        </div>

        {/* Card */}
        <div className="bg-eco-beige rounded-xl shadow-2xl p-8">
          <h1 className="text-eco-forest text-2xl font-extrabold mb-6 text-center">Ingresar</h1>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="admin@ecolink.com"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-eco-forest focus:outline-none focus:border-eco-green transition-colors bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-eco-forest focus:outline-none focus:border-eco-green transition-colors bg-white"
              />
            </div>

            {error && (
              <p className="text-sm text-eco-pink font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-eco-green text-white font-bold py-3 rounded-full uppercase tracking-widest text-sm hover:bg-eco-forest transition-colors disabled:opacity-50 mt-2"
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
