import { useEffect, useState } from 'react';

export default function DadosPacientePage({ initialUsers, cpf }) {
    const [user, setUser] = useState(initialUsers || []);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`http://localhost:8080/pacientes/${cpf}`);
        const data = await response.json();
        setUser([data]);
      }
  
      if (!initialUsers || initialUsers.length === 0) {
        fetchData();
      }
    }, [cpf]);

  return (
    <div className="user-list">
      <h2>Lista de Usuários</h2>

      {user.length === 0 ? (
        <p>Sem informações do usuário!</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              <h3>{user.nome}</h3>
              <h2>Email: {user.email}</h2>
              <h2>Gênero: {user.genero}</h2>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
      `}</style>
    </div>
  );
}
