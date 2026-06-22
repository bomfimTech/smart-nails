import { ServicoRepository } from "../repositories/servico.repository";

type CreateServicoDTO = {
  nome: string;
  duracao: number;
  preco: number;
};

export class CreateServicoUseCase {
  async execute(data: CreateServicoDTO) {
    const servicoRepository = new ServicoRepository();

    return await servicoRepository.create(data);
  }
}