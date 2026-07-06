import { HorarioRepository } from "../repositories/horario.repository";

export class ListHorariosUseCase {
  async execute() {
    const horarioRepository = new HorarioRepository();

    return await horarioRepository.list();
  }
}