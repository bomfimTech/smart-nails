import type { CreateClienteDTO } from "@/modules/clientes/dto/create-cliente.dto";
import type { Cliente } from "@/shared/types/domain/cliente";

export async function editarClienteAction(
  id: number,
  data: Partial<CreateClienteDTO>
): Promise<Cliente> {
  const response = await fetch("/api/clientes", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      ...data,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao editar cliente.");
  }

  return response.json();
}