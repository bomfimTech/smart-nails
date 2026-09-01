import { eq } from "drizzle-orm";

import { db } from "@/infrastructure/database/db";
import { horarios } from "@/infrastructure/database/schemas/horario.schema";
import type { Horario } from "@/shared/types/domain/horario";

export class HorarioRepository {
  async list() {
    return db.select().from(horarios);
  }

  async findById(id: number) {
    const result = await db
      .select()
      .from(horarios)
      .where(eq(horarios.id, id));

    return result[0];
  }

  async findByDiaSemana(diaSemana: string) {
    const result = await db
      .select()
      .from(horarios)
      .where(eq(horarios.diaSemana, diaSemana));

    return result[0];
  }

  async create(horario: Omit<Horario, "id">) {
    const result = await db
      .insert(horarios)
      .values(horario)
      .returning();

    return result[0];
  }

  async update(id: number, horario: Partial<Omit<Horario, "id">>) {
    const result = await db
      .update(horarios)
      .set(horario)
      .where(eq(horarios.id, id))
      .returning();

    return result[0];
  }

  async delete(id: number) {
    await db.delete(horarios).where(eq(horarios.id, id));
  }
}