// pages/Beneficios.js

import Header from '../../components/Header';
import Link from 'next/link';

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
    <nav>
      <Link href="/">
        <a>Voltar para a Página Inicial</a>
      </Link>
    </nav>
    <h1>O que o Saúde para Todos vai te beneficiar?</h1>
    <p>Vamos desenvolver um plano de atendimento voltado para auxiliar pessoas que enfrentam desafios no âmbito da saúde.</p>
    <PropositoCentral />
    <AlternativasAtendimento />
    <ContribuicaoSignificativa />
  </>
);

export default Beneficios;
