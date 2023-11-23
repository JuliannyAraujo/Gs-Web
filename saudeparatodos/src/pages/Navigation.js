// components/Navigation.js
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        Página Inicial
      </Link>
      {' | '}
      <Link href="/beneficios">
        Benefícios
      </Link>
      {' | '}
      <Link href="/criarConta">
        Crie uma Conta
      </Link>
      {' | '}
      <Link href="/login">
        Login
      </Link>
    </nav>
  );
};

export default Navigation;
