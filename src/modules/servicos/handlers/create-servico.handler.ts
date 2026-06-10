import { CreateServicoDTO } from "../dto/create-servico.dto";
import { CreateServicoUseCase } from "../usecases/create-servico.usecase";

export class CreateServicoHandler {
  async handle(data: CreateServicoDTO) {
    const createServicoUseCase = new CreateServicoUseCase();

    return await createServicoUseCase.execute(data);
  }
}