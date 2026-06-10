export class ListHorariosUseCase {
  async execute() {
    return [
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
  }
}