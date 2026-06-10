import { CreateAgendamentoDTO } from "../dto/create-agendamento.dto";

export class CreateAgendamentoUseCase {
  async execute(data: CreateAgendamentoDTO) {
    if (!data.data) {
      throw new Error("Data é obrigatória");
    }

    if (!data.hora) {
      throw new Error("Hora é obrigatória");
    }

    if (!data.clienteId) {
      throw new Error("Cliente é obrigatório");
    }

    if (!data.servicoId) {
      throw new Error("Serviço é obrigatório");
    }

    return {
      id: Date.now(),
      data: data.data,
      hora: data.hora,
      clienteId: data.clienteId,
      servicoId: data.servicoId,
      status: "pendente",
    };
  }
}