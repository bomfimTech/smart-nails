import { ServicoRepository } from "../repositories/servico.repository";

export class ListServicosUseCase {
  async execute() {
    const servicoRepository = new ServicoRepository();

    return await servicoRepository.list();
  }
}