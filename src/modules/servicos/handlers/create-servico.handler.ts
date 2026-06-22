import { CreateServicoUseCase } from "../usecases/create-servico.usecase";

type CreateServicoDTO = {
  nome: string;
  duracao: number;
  preco: number;
};

export class CreateServicoHandler {
  async handle(data: CreateServicoDTO) {
    const createServicoUseCase = new CreateServicoUseCase();

    return await createServicoUseCase.execute(data);
  }
}