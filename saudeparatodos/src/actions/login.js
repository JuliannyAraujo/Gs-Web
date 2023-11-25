 export async function loginPaciente(cpf, senha) {
    const url = `http://localhost:8080/pacientes/${cpf}`;  

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    const resp = await fetch(url, options);

    if (resp.status !== 200) {
        return { error: "Erro ao realizar login. Paciente não encontrado." };
    }

    const paciente = await resp.json();

    if (senha !== paciente.senha) {
        return { error: "Senha incorreta." };
    }

    return { ok: "Login realizado com sucesso", cpf, paciente };
}