import type { CreateClienteDTO } from "../dto/create-cliente.dto";
import { UpdateClienteUseCase } from "../usecases/update-cliente.usecase";

export class UpdateClienteHandler {
  async handle(id: number, data: Partial<CreateClienteDTO>) {
    const updateClienteUseCase = new UpdateClienteUseCase();

    return await updateClienteUseCase.execute(id, data);
  }
}