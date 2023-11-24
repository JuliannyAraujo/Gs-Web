 import { revalidatePath } from "next/cache"
 
export async function cadastrarPaciente(paciente){
    const url = "http://localhost:8080/pacientes"

    const options = {
        method: "POST",
        body: paciente,
        headers: {
            "Content-Type": "application/json"
        }
    }
 
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const mensagens = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {error: "Erro ao cadastrar" + mensagens}
    }
 
    revalidatePath("/login")
    return {ok: "Conta cadastrada com sucesso"}
}