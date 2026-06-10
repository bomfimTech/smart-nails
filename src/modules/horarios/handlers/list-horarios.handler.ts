import { ListHorariosUseCase } from "../usecases/list-horarios.usecase";

export class ListHorariosHandler {
  async handle() {
    const listHorariosUseCase = new ListHorariosUseCase();

    return await listHorariosUseCase.execute();
  }
}