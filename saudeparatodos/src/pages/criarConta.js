import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Navigation from './Navigation';

export default function CriarConta() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [temConvenio, setTemConvenio] = useState(false);
  const [numeroCarteirinha, setNumeroCarteirinha] = useState('');
  const [cpf, setCPF] = useState(''); // Adicione o estado para o CPF
  const [senha, setSenha] = useState('');

  const criarConta = () => {
    // Lógica para criar a conta no servidor, se necessário
    alert('Conta criada com sucesso!');
  };

  return (
    <div className="criar-conta">
      <Header />
      <Navigation />
      <section id="content">
        <h2>Crie uma Conta</h2>
        <form id="crie-uma-conta-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" value={cpf} onChange={(e) => setCPF(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="convenio">Possui Convênio?</label>
            <input type="checkbox" id="convenio" name="convenio" checked={temConvenio} onChange={() => setTemConvenio(!temConvenio)} />
          </div>

          {temConvenio && (
            <div className="form-group">
              <label htmlFor="carteirinha">Número da Carteirinha:</label>
              <input type="text" id="carteirinha" name="carteirinha" value={numeroCarteirinha} onChange={(e) => setNumeroCarteirinha(e.target.value)} />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>

          <button type="button" onClick={criarConta}>
            Criar Conta
          </button>
        </form>

        {/* Adiciona link para ir para a página de login usando Next.js Link */}
        <p>
          Já tem uma conta?{' '}
          <Link href="/login">
            Faça login
          </Link>
        </p>
      </section>

      <style jsx>{`
        .criar-conta {
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
