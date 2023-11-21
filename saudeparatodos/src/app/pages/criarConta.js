// pages/criar-conta.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const CriarConta = () => {
  const criarConta = () => {
    alert('Conta criada com sucesso!');
  };

  return (
    <div>
      <Header />
      <Navigation />
      <section id="content">
        <h2>Crie uma Conta</h2>
        <form id="crie-uma-conta-form">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="sobrenome">Sobrenome:</label>
          <input type="text" id="sobrenome" name="sobrenome" required />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="telefone">Número de Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required />

          <label htmlFor="convenio">Possui Convênio?</label>
          <select id="convenio" name="convenio">
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>

          <label htmlFor="carteirinha">Número da Carteirinha (opcional):</label>
          <input type="text" id="carteirinha" name="carteirinha" />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />

          <button type="button" onClick={criarConta}>Criar Conta</button>
        </form>

        {/* Adiciona link para ir para a página de login usando Next.js Link */}
        <p>Já tem uma conta? <Link href="/login"><a>Faça login</a></Link></p>
      </section>
    </div>
  );
};

export default CriarConta;
