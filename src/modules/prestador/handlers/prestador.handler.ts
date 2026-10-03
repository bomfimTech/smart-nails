import { criarPrestadorUseCase } from "../usecases/criarPrestador.usecase";

export async function criarPrestadorHandler(body: unknown) {
  if (!body || typeof body !== "object") {
    throw new Error("Dados inválidos.");
  }

  const dados = body as { nome?: unknown };

  if (typeof dados.nome !== "string") {
    throw new Error("O nome do prestador deve ser informado.");
  }

  return await criarPrestadorUseCase({
    nome: dados.nome,
  });
}