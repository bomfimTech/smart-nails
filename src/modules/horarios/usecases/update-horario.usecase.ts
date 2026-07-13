import { HorarioRepository } from "../repositories/horario.repository";

type UpdateHorarioDTO = {
  diaSemana?: string;
  horaInicio?: string;
  horaFim?: string;
  ativo?: boolean;
};

export class UpdateHorarioUseCase {
  async execute(id: number, data: UpdateHorarioDTO) {
    const horarioRepository = new HorarioRepository();

    return await horarioRepository.update(id, data);
  }
}