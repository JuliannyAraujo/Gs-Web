import Header from './components/Header';
import Link from 'next/link';

// Componente de Logo
const Logo = () => (
  <div style={logoStyle}>
    <img src="/logo.img.png" alt="Logo do Grupo" width={50} height={50} />
  </div>
);

export default function Home() {
  return (
    <>
      <Header />
      <nav style={navStyle}>
        <Logo /> {/* Adiciona o componente de Logo */}
        <ul style={linkContainerStyle}>
          <li><Link href="/" style={linkStyle}>Página Inicial</Link></li>
          <li><Link href="/criarConta" style={linkStyle}>Crie uma Conta</Link></li>
          <li><Link href="/login" style={linkStyle}>Login</Link></li>
        </ul>
      </nav>
      <section id="content" style={contentStyle}>
        <h1 style={titleStyle}>Bem-vindo ao Saúde para Todos!</h1>
        <p style={paragraphStyle}>
          A saúde é um aspecto fundamental da vida. Manter um estilo de vida saudável contribui para o bem-estar físico e mental. Nossa missão é proporcionar a todos o acesso a informações e serviços de saúde de qualidade. Junte-se a nós nessa jornada pela saúde para todos!
        </p>
      </section>
    </>
  );
}

// Estilos
const navStyle = {
  background: '#d2f4e8', // Verde claro
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
};

const linkContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const linkStyle = {
  margin: '0 10px',
  color: '#4CAF50', // Verde escuro
  textDecoration: 'none',
  fontSize: '18px',
};

const contentStyle = {
  padding: '20px',
  textAlign: 'center',
};

const titleStyle = {
  color: '#4CAF50', // Verde escuro
  fontSize: '36px',
};

const paragraphStyle = {
  color: '#555',
  fontSize: '18px',
  lineHeight: '1.5',
};

const logoStyle = {
  marginLeft: 'auto', // Move para o canto direito
};
