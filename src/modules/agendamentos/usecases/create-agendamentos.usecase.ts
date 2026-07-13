import { CreateAgendamentoDTO } from "../dto/create-agendamento.dto";
import { AgendamentoRepository } from "../repositories/agendamento.repository";

export class CreateAgendamentoUseCase {
  async execute(data: CreateAgendamentoDTO) {
    const agendamentoRepository = new AgendamentoRepository();

    return await agendamentoRepository.create({
      clienteId: data.clienteId,
      servicoId: data.servicoId,
      data: data.data,
      horaInicio: data.horaInicio,
      status: data.status,
    });
  }
}