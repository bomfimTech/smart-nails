import type { CreateClienteDTO } from "@/modules/clientes/dto/create-cliente.dto";
import type { Cliente } from "@/shared/types/domain/cliente";

export async function criarClienteAction(
  data: CreateClienteDTO
): Promise<Cliente> {
  const response = await fetch("/api/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar cliente.");
  }

  return response.json();
}