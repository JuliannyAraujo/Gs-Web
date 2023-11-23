// pages/Beneficios.js
import Link from 'next/link';
import Header from '@/app/components/Header';
import Navigation from './Navigation';

const PropositoCentral = () => (
  <div>
    <h3>Propósito Central</h3>
    <p>O nosso propósito central não é apenas prestar assistência, mas também conscientizar sobre a importância do autocuidado e da busca por uma qualidade de vida aprimorada.</p>
  </div>
);

const AlternativasAtendimento = () => (
  <div>
    <h3>Oferecer Alternativas de Atendimento</h3>
    <p>Buscamos oferecer alternativas de atendimento mais eficientes, com profissionais cada vez mais especializados em áreas específicas.</p>
  </div>
);

const ContribuicaoSignificativa = () => (
  <div>
    <h3>Contribuir de Forma Significativa</h3>
    <p>Nosso objetivo é contribuir de forma significativa para o bem-estar da população, proporcionando suporte adequado e promovendo uma abordagem mais simplificada em relação à saúde mental.</p>
  </div>
);

const Beneficios = () => (
  <>
    <Header />
    <Navigation />
    <div className="beneficios-container">
      <div className="beneficios-titulo-resposta">
        <h1>
          O que o Saúde para Todos vai te proporcionar?
          <img src="icone.png" alt="Ícone" className="icone" />
        </h1>
        <p>Vamos desenvolver um plano de atendimento voltado para auxiliar pessoas que enfrentam desafios no âmbito da saúde.</p>
      </div>
      <div className="beneficios-tres-topicos">
        <PropositoCentral />
        <AlternativasAtendimento />
        <ContribuicaoSignificativa />
      </div>
      <div className="beneficios-nav">
        <Link href="/" className="link-voltar">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>

    <style jsx>{`
      .beneficios-container {
        display: flex;
        justify-content: space-between;
        max-width: 1300x;
        margin: 0 auto;
        padding: 20px;
      }

      .beneficios-titulo-resposta,
      .beneficios-tres-topicos {
        flex: 1;
      }

      .beneficios-tres-topicos {
        margin-left: 40px;
      }

      .beneficios-nav {
        text-align: right;
      }

      h1 {
        color: #006400; /* Verde escuro */
        display: flex;
        align-items: center; /* Centraliza a imagem verticalmente */
      }

      .icone {
        margin-left: 10px; /* Adicione margem entre o texto e a imagem */
      }

      .link-voltar {
        color: #006400; /* Verde escuro para o link de voltar */
        margin-top: 10px;
        display: block;
      }

      /* Adicionando justificação para os tópicos */
      .beneficios-titulo-resposta p,
      .beneficios-tres-topicos p {
        text-align: justify;
      }
    `}</style>
  </>
);

export default Beneficios;
