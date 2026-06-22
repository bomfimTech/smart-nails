import { UpdateServicoUseCase } from "../usecases/update-servico.usecase";

type UpdateServicoDTO = {
  nome?: string;
  duracao?: number;
  preco?: number;
};

export class UpdateServicoHandler {
  async handle(id: number, data: UpdateServicoDTO) {
    const updateServicoUseCase = new UpdateServicoUseCase();

    return await updateServicoUseCase.execute(id, data);
  }
}