import { DeleteServicoUseCase } from "../usecases/delete-servico.usecase";

export class DeleteServicoHandler {
  async handle(id: number) {
    const deleteServicoUseCase = new DeleteServicoUseCase();

    await deleteServicoUseCase.execute(id);
  }
}