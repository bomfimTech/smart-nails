import type { CreateClienteDTO } from "../dto/create-cliente.dto";
import { ClienteRepository } from "../repositories/cliente.repository";

export class UpdateClienteUseCase {
  async execute(id: number, data: Partial<CreateClienteDTO>) {
    const clienteRepository = new ClienteRepository();

    const cliente = await clienteRepository.update(id, data);

    return cliente;
  }
}