// components/Navigation.js
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Página Inicial</Link></li>
        <li><Link href="/criar-conta">Crie uma Conta</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
