

import Image from 'next/image'
import Header from './components/Header'
import CustomLink from './CustomLink';

export default function Home() {
  return (
    <>
      <header>
        <h1 style={{ color: 'blue', fontSize: '24px' }}>Saúde para Todos</h1>
      </header>
      <Header />
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
          <li><CustomLink href="/">Página Inicial</CustomLink></li>
          <li><CustomLink href="/login">Login</CustomLink></li>
          <li><CustomLink href="/criarConta">Crie uma Conta</CustomLink></li>
        </ul>
      </nav>
      <section id="content">
        <p style={{ color: 'lightblue' }}>Bem-vindo ao Saúde para Todos!</p>
        <p>A saúde é um aspecto fundamental da vida. Manter um estilo de vida saudável contribui para o bem-estar físico e mental. Nossa missão é proporcionar a todos o acesso a informações e serviços de saúde de qualidade. Junte-se a nós nessa jornada pela saúde para todos!</p>
      </section>
    </>
  )
}
