import type { CreateClienteDTO } from "@/modules/clientes/dto/create-cliente.dto";
import type { RespostaClienteDTO } from "@/modules/clientes/dto/cliente-resposta.dto";

export async function criarClienteAction(
  dados: CreateClienteDTO
): Promise<RespostaClienteDTO> {
  const response = await fetch("/api/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar cliente.");
  }

  return response.json();
}