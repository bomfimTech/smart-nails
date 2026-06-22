import { ServicoRepository } from "../repositories/servico.repository";

type UpdateServicoDTO = {
  nome?: string;
  duracao?: number;
  preco?: number;
};

export class UpdateServicoUseCase {
  async execute(id: number, data: UpdateServicoDTO) {
    const servicoRepository = new ServicoRepository();

    return await servicoRepository.update(id, data);
  }
}