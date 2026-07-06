import { DeleteHorarioUseCase } from "../usecases/delete-horario.usecase";

export class DeleteHorarioHandler {
  async handle(id: number) {
    const deleteHorarioUseCase = new DeleteHorarioUseCase();

    await deleteHorarioUseCase.execute(id);
  }
}