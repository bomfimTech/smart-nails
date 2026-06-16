import { db } from "@/infrastructure/database";
import { horarios } from "@/infrastructure/database/schemas/horario.schema";

export class HorarioRepository {
  async list() {
    return db.select().from(horarios);
  }
}