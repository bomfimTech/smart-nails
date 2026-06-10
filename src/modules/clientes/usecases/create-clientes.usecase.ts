import { CreateClienteDTO } from "../dto/create-cliente.dto";

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

    return {
      id: Date.now(),
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
    };
  }
}