import type { Servico } from "@/shared/types/domain/servico";
import type { CreateServicoDTO } from "@/modules/servicos/dto/create-servico.dto";

export async function editarServicoAction(
  id: number,
  data: Partial<CreateServicoDTO>
): Promise<Servico> {
  const response = await fetch("/api/servicos", {
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
    throw new Error("Erro ao editar serviço.");
  }

  return response.json();
}