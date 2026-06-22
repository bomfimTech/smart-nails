import { ServicoRepository } from "../repositories/servico.repository";

export class DeleteServicoUseCase {
  async execute(id: number) {
    const servicoRepository = new ServicoRepository();

    await servicoRepository.delete(id);
  }
}