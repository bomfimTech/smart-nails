import { CriarPrestadorDTO } from "../dto/prestador.dto";
import { PrestadorRepository } from "../repositories/prestador.repository";

const prestadorRepository = new PrestadorRepository();

export async function criarPrestadorUseCase(
  dados: CriarPrestadorDTO,
) {
  const nome = dados.nome.trim();

  if (!nome) {
    throw new Error("O nome do prestador é obrigatório.");
  }

  return await prestadorRepository.criar(nome);
}