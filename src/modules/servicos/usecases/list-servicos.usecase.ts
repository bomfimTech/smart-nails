export class ListServicosUseCase {
  async execute() {
    return [
      {
        id: 1,
        nome: "Manicure",
        duracao: 60,
        preco: 35,
      },
      {
        id: 2,
        nome: "Pedicure",
        duracao: 90,
        preco: 50,
      },
    ];
  }
}