export class ListAgendamentosUseCase {
  async execute() {
    return [
      {
        id: 1,
        data: new Date("2026-06-20"),
        hora: "09:00",
        clienteId: 1,
        servicoId: 1,
        status: "pendente",
      },
      {
        id: 2,
        data: new Date("2026-06-21"),
        hora: "14:00",
        clienteId: 2,
        servicoId: 2,
        status: "confirmado",
      },
    ];
  }
}