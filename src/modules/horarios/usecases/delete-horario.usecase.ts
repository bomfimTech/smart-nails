import { HorarioRepository } from "../repositories/horario.repository";

export class DeleteHorarioUseCase {
  async execute(id: number) {
    const horarioRepository = new HorarioRepository();

    await horarioRepository.delete(id);
  }
}