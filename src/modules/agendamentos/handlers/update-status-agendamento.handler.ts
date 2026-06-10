import { UpdateStatusAgendamentoDTO } from "../dto/update-status-agendamento.dto";
import { UpdateStatusAgendamentoUseCase } from "../usecases/update-status-agendamento.usecase";

export class UpdateStatusAgendamentoHandler {
  async handle(data: UpdateStatusAgendamentoDTO) {
    const updateStatusAgendamentoUseCase = new UpdateStatusAgendamentoUseCase();

    return await updateStatusAgendamentoUseCase.execute(data);
  }
}