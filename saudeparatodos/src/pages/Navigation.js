import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <img src="/logo.png.png" alt="Logo" width={50} height={50} />
      </Link>
      {' | '}
      <Link href="/beneficios">
        <span>Benefícios</span>
      </Link>
      {' | '}
      <Link href="/criarConta">
        <span>Crie uma Conta</span>
      </Link>
      {' | '}
      <Link href="/login">
        <span>Login</span>
      </Link>

      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
        }

        span {
          margin-right: 20px;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
