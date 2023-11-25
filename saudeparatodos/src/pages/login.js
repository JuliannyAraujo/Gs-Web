import { loginPaciente } from '@/actions/login';
import Link from 'next/link';

export default function LoginPage() {
  const [messagem, setMessage] = useState("")

  async function fazerLogin() {

    const formData = new FormData(event.target);
    const cpf = formData.get('cpf');
    const senha = formData.get('senha');

    if (!cpf || !senha) {
      console.error("Por favor, forneça CPF e senha.");
      return;
    }

    const resultadoLogin = await loginPaciente(cpf, senha);

    if (resultadoLogin.error) {
      setMessage(resultadoLogin.error);
      return;
    } else {
      setMensagem(resultadoLogin.ok);

      setTimeout(() => {
        router.push({
          pathname: '/dadosPaciente',
          query: { ...resultadoLogin.paciente, cpf }
        });
      }, 5000);
    }

  };

  return (
    <div className="login">
      <section id="content">
        <h2>Login</h2>
        <form onSubmit={fazerLogin} id="login-form">
          <div className="form-group">
            <label htmlFor="cpf">Digite seu CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
          </div>

          <button type="button" onClick={fazerLogin}>Login</button>
        </form>
      </section>

      <p>Ainda não tem uma conta? <Link href="/criarConta">Crie uma conta</Link></p>

      <div>
        <h3>{messagem}</h3>
      </div>
      <style jsx>{`
        .login {
          background-color: #f0f0f0;
          padding: 20px;
        }

        #content {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
