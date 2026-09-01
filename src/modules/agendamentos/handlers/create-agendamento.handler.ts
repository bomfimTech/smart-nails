import { CreateAgendamentoDTO } from "../dto/create-agendamento.dto";
import { CriarAgendamentoUseCase } from "../usecases/criar-agendamento.usecase";

export class CreateAgendamentoHandler {
  async handle(data: CreateAgendamentoDTO) {
    const createAgendamentoUseCase =
      new CriarAgendamentoUseCase();

    return await createAgendamentoUseCase.execute(data);
  }
}