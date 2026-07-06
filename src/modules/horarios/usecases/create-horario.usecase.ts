import { CreateHorarioDTO } from "../dto/create-horario.dto";
import { HorarioRepository } from "../repositories/horario.repository";

export class CreateHorarioUseCase {
  async execute(data: CreateHorarioDTO) {
    if (!data.diaSemana) {
      throw new Error("Dia da semana é obrigatório");
    }

    if (!data.horaInicio) {
      throw new Error("Hora de início é obrigatória");
    }

    if (!data.horaFim) {
      throw new Error("Hora de fim é obrigatória");
    }

    if (data.horaInicio >= data.horaFim) {
      throw new Error("Hora de início deve ser menor que a hora de fim");
    }

    const horarioRepository = new HorarioRepository();

    return await horarioRepository.create({
      diaSemana: data.diaSemana,
      horaInicio: data.horaInicio,
      horaFim: data.horaFim,
      ativo: true,
    });
  }
}