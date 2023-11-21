// pages/login.js
import React from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Navigation from './components/Navigation';

const LoginPage = () => {
  const fazerLogin = () => {
    alert('Login bem-sucedido!');
  };

  return (
    <div>
      <Header />
      <Navigation />
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

      {/* Adiciona link para ir para a página de criar conta usando Next.js Link */}
      <p>Ainda não tem uma conta? <Link href="/criar-conta"><a>Crie uma conta</a></Link></p>
    </div>
  );
};

export default LoginPage;
