import Header from '@/app/components/Header';
import Navigation from './Navigation';

const Sobre = () => (
  <>
    <Header />
    <Navigation />
    <div className="sobre-container">
      <div className="sobre-titulo">
        <h1 style={{ fontSize: '32px' }}>Apresentação</h1>
      </div>
      <div className="sobre-conteudo">
        <div className="sobre-item">
          <h2 style={{ fontSize: '24px' }}>Missão</h2>
          <p style={{ fontSize: '18px' }}>
            Inovar a capacidade de um atendimento acessível para comunidade e região com o projeto para todos ter acesso e atendimento garantido.
          </p>
          {/* Adicione a imagem abaixo do texto Missão */}
          <img src="/atendimento.png" alt="Adicional" style={{ marginTop: '10px', width: '100px', height: 'auto' }} />
        </div>
        <div className="sobre-item">
          <h2 style={{ fontSize: '24px' }}>Visão</h2>
          <p style={{ fontSize: '18px' }}>
            Buscar a infraestrutura para melhorar cada vez mais e assim, pode se tornar a melhor clínica em valor acessível para comunidade/região.
          </p>
        </div>
        <div className="sobre-item">
          <h2 style={{ fontSize: '24px' }}>Proposta de Valor</h2>
          <p style={{ fontSize: '18px' }}>
            Ter equipamentos de alta qualidade e tecnologia, assim tendo profissionais capacitados para cada área da saúde.
          </p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .sobre-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }

      .sobre-titulo h1 {
        color: #006400; /* Verde escuro */
        text-align: center;
      }

      .sobre-conteudo {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
      }

      .sobre-item {
        flex: 1;
        margin-right: 80px;
      }

      h2 {
        color: #4CAF50; /* Verde médio */
      }

      p {
        text-align: justify;
      }
    `}</style>
  </>
);

export default Sobre;
