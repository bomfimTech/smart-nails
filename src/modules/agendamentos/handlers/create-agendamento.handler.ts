import { CreateAgendamentoDTO } from "../dto/create-agendamento.dto";
import { CreateAgendamentoUseCase } from "../usecases/create-agendamentos.usecase";

export class CreateAgendamentoHandler {
  async handle(data: CreateAgendamentoDTO) {
    const createAgendamentoUseCase =
      new CreateAgendamentoUseCase();

    return await createAgendamentoUseCase.execute(data);
  }
}