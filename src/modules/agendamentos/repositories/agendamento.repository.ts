import { db } from "@/infrastructure/database";
import { agendamentos } from "@/infrastructure/database/schemas/agendamento.schema";

export class AgendamentoRepository {
  async list() {
    return db.select().from(agendamentos);
  }
}