// pages/login.js
import Link from 'next/link';
import React from 'react';
// import Navigation from './components/Navigation';

export default function LoginPage() {
  const fazerLogin = () => {
    console.log('Login bem-sucedido!');
  };

  return (
    <div>
      <section id="content">
        <h2>Login</h2>
        <form id="login-form">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />

          <button type="button" onClick={fazerLogin}>Login</button>
        </form>
      </section>

      <p>Ainda não tem uma conta? <Link href="/criarConta">Crie uma conta</Link></p>
    </div>
  )
}