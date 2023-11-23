import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Navigation from './Navigation';




export default function CriarConta() {
  const criarConta = () => {
    alert('Conta criada com sucesso!');
    // Lógica adicional para criar a conta no servidor, se necessário
  };

  return (
    <div>
      <Header/>
      <Navigation/>
      <section id="content">
        <h2>Crie uma Conta</h2>
        <form id="crie-uma-conta-form">
          {/* Seus campos de formulário aqui */}

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
    </div>
  );
}
