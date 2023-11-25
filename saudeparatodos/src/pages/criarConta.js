import { cadastrarPaciente } from '@/actions/cadastro';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from './Navigation';

export default function CriarConta() {
  const [messagem, setMessage] = useState("")

  async function cadastro(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const paciente = {
      nome: formData.get('nome'),
      cpf: formData.get('cpf'),
      genero: formData.get('genero'),
      email: formData.get('email'),
      senha: formData.get('senha'),
    };

    const resp = await cadastrarPaciente(paciente);

    if (resp.error) {
      setMessage(resp.error);
      return;
    }

    redirect("/login");
  }

  return (
    <div className="criar-conta">
      <Navigation />
      <section id="content">
        <h2>Crie uma Conta</h2>
        <form onSubmit={cadastro} id="crie-uma-conta-form">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </div>

          <div className="form-group">
            <label htmlFor="genero">Gênero:</label>
            <select id="genero" name="genero" defaultValue="" required>
              <option value="" disabled>Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
          </div>

          <button type='submit'>
            Criar Conta
          </button>
        </form>


        <p>
          Já tem uma conta?{' '}
          <Link href="/login">
            Faça login
          </Link>
        </p>

        <h3>{messagem}</h3>
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
