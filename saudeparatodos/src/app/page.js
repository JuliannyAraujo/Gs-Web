import Link from 'next/link';
import Header from './components/Header';

// Estilos
const navStyle = {
  background: '#d2f4e8', // Verde claro
  padding: '1px',
  display: 'flex',
  justifyContent: 'space-between',
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

const linkSaibaMaisStyle = {
  color: '#4CAF50', // Verde escuro
  textDecoration: 'underline',
  cursor: 'pointer',
};

const contentStyle = {
  padding: '15px',
  textAlign: 'center',
};

const titleStyle = {
  color: '#4CAF50', // Verde escuro
  fontSize: '28px',
};

const paragraphStyle = {
  color: '#555',
  fontSize: '19px',
  lineHeight: '1.5',
};

const logoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const saudeImageContainerStyle = {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const whyHealthStyle = {
  marginTop: '20px',
};

const whyHealthTitleStyle = {
  fontSize: '20px',
  color: '#4CAF50',
  marginBottom: '20px',
};

const answerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const answerStyle = {
  maxWidth: '300px',
  textAlign: 'left',
  margin: '0 20px',
};

const iconStyle = {
  backgroundColor: '#d2f4e8',
  color: '#4CAF50',
  fontSize: '22px',
  width: '40px',
  height: '40px',
  borderRadius: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '15px',
};

const Home = () => (
  <>
    <Header />
    <nav style={navStyle}>
      <div style={logoStyle}>
        <img src="/logo.png.png" alt="Logo do Grupo" width={80} height={80} />
        <Link href="/beneficios" style={linkStyle}>
          Benefícios
        </Link>
      </div>
      <ul style={linkContainerStyle}>
        <li>
          <Link href="/criarConta" style={linkStyle}>
            Crie uma Conta
          </Link>
        </li>
        <li>
          <Link href="/login" style={linkStyle}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
    <section id="content" style={contentStyle}>
      <h1 style={titleStyle}>Bem-vindo ao Saúde para Todos!</h1>
      <p style={paragraphStyle}>
        A saúde é um aspecto fundamental da vida. Manter um estilo de vida saudável contribui para o bem-estar físico e mental. Nossa missão é proporcionar a todos o acesso a informações e serviços de saúde de qualidade. Junte-se a nós nessa jornada pela saúde para todos!{' '}
        <Link href="/sobre">
          <span style={linkSaibaMaisStyle}>Saiba mais!</span>
        </Link>
      </p>
      <div style={saudeImageContainerStyle}>
        <img src="/saude.png" alt="Imagem Saúde" width={400} height={400} />
      </div>
      <div style={whyHealthStyle}>
        <h2 style={whyHealthTitleStyle}>Por que a saúde é importante para todos?</h2>
        <div style={answerContainerStyle}>
          <div style={answerStyle}>
            <div style={iconStyle}>1</div>
            <p>Cultivar hábitos saudáveis, como uma alimentação equilibrada e a prática regular de atividades físicas, é crucial para promover o bem-estar físico e mental ao longo da vida.</p>
          </div>
          <div style={answerStyle}>
            <div style={iconStyle}>2</div>
            <p> Reconhecer a importância da saúde é fundamental, pois ela é um aspecto essencial de nossa existência.</p>
          </div>
          <div style={answerStyle}>
            <div style={iconStyle}>3</div>
            <p>Nossa missão é fornecer acesso a informações e serviços de saúde de alta qualidade, visando o cuidado e o bem-estar de toda a comunidade.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
