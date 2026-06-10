import { ValidarHorarioDTO } from "../dto/validar-horario.dto";

export class ValidarHorarioUseCase {
  async execute(data: ValidarHorarioDTO) {
    const horariosDisponiveis = [
      {
        id: 1,
        diaSemana: "segunda",
        horaInicio: "08:00",
        horaFim: "18:00",
      },
      {
        id: 2,
        diaSemana: "terça",
        horaInicio: "08:00",
        horaFim: "18:00",
      },
    ];

    const diasSemana = [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
    ];

    const diaDaSemana = diasSemana[data.data.getDay()];

    const horarioValido = horariosDisponiveis.some((horario) => {
      return (
        horario.diaSemana === diaDaSemana &&
        data.hora >= horario.horaInicio &&
        data.hora <= horario.horaFim
      );
    });

    return {
      valido: horarioValido,
      mensagem: horarioValido
        ? "Horário disponível para agendamento"
        : "Horário fora do período de atendimento",
    };
  }
}