import { CreateAgendamentoDTO } from "../dto/create-agendamento.dto";
import { AgendamentoRepository } from "../repositories/agendamento.repository";

import { ClienteRepository } from "@/modules/clientes/repositories/cliente.repository";

export class CreateAgendamentoUseCase {
  private agendamentoRepository = new AgendamentoRepository();
  private clienteRepository = new ClienteRepository();

  async execute(data: CreateAgendamentoDTO) {
    await this.validarAgendamento(data);

    return await this.agendamentoRepository.create({
      clienteId: data.clienteId,
      servicoId: data.servicoId,
      data: data.data,
      horaInicio: data.horaInicio,
      status: data.status,
    });
  }

  private async validarAgendamento(data: CreateAgendamentoDTO) {
    await this.validarCliente(data.clienteId);

    // Próximas regras:
    // await this.validarServico(data.servicoId);
    // await this.validarHorario(data);
    // await this.validarDisponibilidade(data);
    // await this.validarConflitos(data);
  }

  private async validarCliente(clienteId: number) {
    const cliente = await this.clienteRepository.findById(clienteId);

    if (!cliente) {
      throw new Error("Cliente não encontrado.");
    }
  }
}