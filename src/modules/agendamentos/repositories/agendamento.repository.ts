import { eq } from "drizzle-orm";

import { db } from "@/infrastructure/database";
import { agendamentos } from "@/infrastructure/database/schemas/agendamento.schema";
import type { Agendamento } from "@/shared/types/agendamento";

export class AgendamentoRepository {
  async list() {
    return db.select().from(agendamentos);
  }

  async findById(id: number) {
    const result = await db
      .select()
      .from(agendamentos)
      .where(eq(agendamentos.id, id));

    return result[0];
  }

  async create(agendamento: Omit<Agendamento, "id">) {
    const result = await db
      .insert(agendamentos)
      .values({
        ...agendamento,
        data: agendamento.data.toISOString(),
      })
      .returning();

    return result[0];
  }

  async update(id: number, agendamento: Partial<Omit<Agendamento, "id">>) {
    const result = await db
      .update(agendamentos)
      .set({
        ...agendamento,
        data: agendamento.data?.toISOString(),
      })
      .where(eq(agendamentos.id, id))
      .returning();

    return result[0];
  }

  async delete(id: number) {
    await db.delete(agendamentos).where(eq(agendamentos.id, id));
  }
}