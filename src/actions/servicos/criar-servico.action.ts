import type { Servico } from "@/shared/types/domain/servico";
import type { CreateServicoDTO } from "@/modules/servicos/dto/create-servico.dto";

export async function criarServicoAction(
  data: CreateServicoDTO
): Promise<Servico> {
  const response = await fetch("/api/servicos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar serviço.");
  }

  return response.json();
}