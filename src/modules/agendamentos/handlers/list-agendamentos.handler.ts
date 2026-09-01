import { ListAgendamentosUseCase } from "../usecases/listar-agendamentos.usecase";

export class ListAgendamentosHandler {
  async handle() {
    const listAgendamentosUseCase = new ListAgendamentosUseCase();

    return await listAgendamentosUseCase.execute();
  }
}