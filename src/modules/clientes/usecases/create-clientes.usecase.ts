import { CreateClienteDTO } from "../dto/create-cliente.dto";
import { ClienteRepository } from "../repositories/cliente.repository";

export class CreateClienteUseCase {
  async execute(data: CreateClienteDTO) {
    if (!data.nome) {
      throw new Error("Nome é obrigatório");
    }

    if (!data.telefone) {
      throw new Error("Telefone é obrigatório");
    }

    if (!data.email) {
      throw new Error("Email é obrigatório");
    }

    const clienteRepository = new ClienteRepository();

    const cliente = await clienteRepository.create({
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
    });

    return cliente;
  }
}