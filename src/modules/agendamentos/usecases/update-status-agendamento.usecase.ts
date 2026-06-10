import { UpdateStatusAgendamentoDTO } from "../dto/update-status-agendamento.dto";

export class UpdateStatusAgendamentoUseCase {
  async execute(data: UpdateStatusAgendamentoDTO) {
    if (!data.id) {
      throw new Error("ID do agendamento é obrigatório");
    }

    if (!data.status) {
      throw new Error("Status é obrigatório");
    }

    const statusPermitidos = ["pendente", "confirmado", "cancelado", "concluido"];

    if (!statusPermitidos.includes(data.status)) {
      throw new Error("Status inválido");
    }

    return {
      id: data.id,
      status: data.status,
    };
  }
}