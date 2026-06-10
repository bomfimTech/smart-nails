import { ListClientesUseCase } from "../usecases/list-clientes.usecase";

export class ListClientesHandler {
  async handle() {
    const listClientesUseCase = new ListClientesUseCase();

    return await listClientesUseCase.execute();
  }
}