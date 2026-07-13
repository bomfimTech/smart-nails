import { UpdateHorarioUseCase } from "../usecases/update-horario.usecase";

type UpdateHorarioDTO = {
  diaSemana?: string;
  horaInicio?: string;
  horaFim?: string;
  ativo?: boolean;
};

export class UpdateHorarioHandler {
  async handle(id: number, data: UpdateHorarioDTO) {
    const updateHorarioUseCase = new UpdateHorarioUseCase();

    return await updateHorarioUseCase.execute(id, data);
  }
}