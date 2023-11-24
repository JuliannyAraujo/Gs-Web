import React from 'react';
import Link from 'next/link';

const navStyle = {
  background: '#d2f4e8', // Verde claro
  padding: '1px',
  display: 'flex',
  justifyContent: 'space-between',
};
const logoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const linkContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const linkStyle = {
  margin: '0 30px',
  color: '#4CAF50', // Verde escuro
  textDecoration: 'none',
  fontSize: '18px',
};

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <Link href="/">
          <img src="/logo.png.png" alt="Logo" width={80} height={80} />
        </Link>
      </div>
      <ul style={linkContainerStyle}>
        <Link href="/beneficios" style={linkStyle}>
          Benefícios
        </Link>
        <Link href="/criarConta" style={linkStyle}>
          Crie uma Conta
        </Link>
        <Link href="/login" style={linkStyle}>
          Login
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
