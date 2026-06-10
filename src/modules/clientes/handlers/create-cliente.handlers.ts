import { CreateClienteDTO } from "../dto/create-cliente.dto";
import { CreateClienteUseCase } from "../usecases/create-clientes.usecase";

export class CreateClienteHandler {
  async handle(data: CreateClienteDTO) {
    const createClienteUseCase = new CreateClienteUseCase();

    return await createClienteUseCase.execute(data);
  }
}