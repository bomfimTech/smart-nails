import type { Servico } from "@/shared/types/domain/servico";

export async function carregarServicosAction(): Promise<Servico[]> {
  const response = await fetch("/api/servicos");

  if (!response.ok) {
    throw new Error("Erro ao carregar serviços.");
  }

  return response.json();
}