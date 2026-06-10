export class ListClientesUseCase {
  async execute() {
    return [
      {
        id: 1,
        nome: "Maria Souza",
        telefone: "85999999999",
        email: "maria@email.com",
      },
      {
        id: 2,
        nome: "Ana Lima",
        telefone: "85888888888",
        email: "ana@email.com",
      },
    ];
  }
}