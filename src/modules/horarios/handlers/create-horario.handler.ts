import { CreateHorarioDTO } from "../dto/create-horario.dto";
import { CreateHorarioUseCase } from "../usecases/create-horario.usecase";

export class CreateHorarioHandler {
  async handle(data: CreateHorarioDTO) {
    const createHorarioUseCase = new CreateHorarioUseCase();

    return await createHorarioUseCase.execute(data);
  }
}