import { ClienteRepository } from "../repositories/cliente.repository";

export class DeleteClienteUseCase {
  async execute(id: number) {
    const clienteRepository = new ClienteRepository();

    await clienteRepository.delete(id);
  }
}