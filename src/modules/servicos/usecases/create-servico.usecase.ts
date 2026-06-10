import { CreateServicoDTO } from "../dto/create-servico.dto";

export class CreateServicoUseCase {
  async execute(data: CreateServicoDTO) {
    if (!data.nome) {
      throw new Error("Nome é obrigatório");
    }

    if (data.duracao <= 0) {
      throw new Error("Duração inválida");
    }

    if (data.preco <= 0) {
      throw new Error("Preço inválido");
    }

    return {
      id: Date.now(),
      ...data,
    };
  }
}