import type { Cliente } from "@/shared/types/domain/cliente";

export async function carregarClientesAction(): Promise<Cliente[]> {
  const response = await fetch("/api/clientes");

  if (!response.ok) {
    throw new Error("Erro ao carregar clientes.");
  }

  return response.json();
}