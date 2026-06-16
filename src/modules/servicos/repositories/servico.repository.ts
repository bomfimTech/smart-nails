import { db } from "@/infrastructure/database";
import { servicos } from "@/infrastructure/database/schemas/servico.schema";

export class ServicoRepository {
  async list() {
    return db.select().from(servicos);
  }
}