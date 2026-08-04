export async function removerServicoAction(
  id: number
): Promise<void> {
  const response = await fetch("/api/servicos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) {
    throw new Error("Erro ao remover serviço.");
  }
}