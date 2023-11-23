// components/Navigation.js
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a>Página Inicial</a>
      </Link>
      {' | '}
      <Link href="/beneficios">
        <a>Benefícios</a>
      </Link>
      {' | '}
      <Link href="/criarConta">
        <a>Crie uma Conta</a>
      </Link>
      {' | '}
      <Link href="/login">
        <a>Login</a>
      </Link>
    </nav>
  );
};

export default Navigation;
