import { DeleteClienteUseCase } from "../usecases/delete-clientes.usecase";

export class DeleteClienteHandler {
  async handle(id: number) {
    const deleteClienteUseCase = new DeleteClienteUseCase();

    await deleteClienteUseCase.execute(id);
  }
}