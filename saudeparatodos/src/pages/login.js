import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  const fazerLogin = () => {
    console.log('Login bem-sucedido!');
  };

  return (
    <div className="login">
      <section id="content">
        <h2>Login</h2>
        <form id="login-form">
          <div className="form-group">
            <label htmlFor="cpf">Digite seu CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
          </div>

          <button type="button" onClick={fazerLogin}>Login</button>
        </form>
      </section>

      <p>Ainda não tem uma conta? <Link href="/criarConta">Crie uma conta</Link></p>

      <style jsx>{`
        .login {
          background-color: #f0f0f0;
          padding: 20px;
        }

        #content {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
