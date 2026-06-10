import { ListServicosUseCase } from "../usecases/list-servicos.usecase";

export class ListServicosHandler {
  async handle() {
    const listServicosUseCase = new ListServicosUseCase();

    return await listServicosUseCase.execute();
  }
}