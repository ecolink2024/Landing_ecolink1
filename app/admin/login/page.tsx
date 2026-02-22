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
    <main className="admin-wrap">
      <div className="container" style={{ maxWidth: 480 }}>
        <h1>Ingreso administrador</h1>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Contraseña
            <input name="password" type="password" required />
          </label>
          {error ? <p style={{ color: '#be123c' }}>{error}</p> : null}
          <button className="btn-primary" disabled={loading} type="submit">
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </main>
  );
}
