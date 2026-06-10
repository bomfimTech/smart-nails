import { ListAgendamentosUseCase } from "../usecases/list-agendamentos.usecase";

export class ListAgendamentosHandler {
  async handle() {
    const listAgendamentosUseCase = new ListAgendamentosUseCase();

    return await listAgendamentosUseCase.execute();
  }
}