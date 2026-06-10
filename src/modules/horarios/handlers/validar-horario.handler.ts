import { ValidarHorarioDTO } from "../dto/validar-horario.dto";
import { ValidarHorarioUseCase } from "../usecases/validar-horario.usecase";

export class ValidarHorarioHandler {
  async handle(data: ValidarHorarioDTO) {
    const validarHorarioUseCase = new ValidarHorarioUseCase();

    return await validarHorarioUseCase.execute(data);
  }
}