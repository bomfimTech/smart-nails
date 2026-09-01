import { db } from "@/infrastructure/database/db";
import { agendamentosTable } from "@/infrastructure/database/schemas/agendamento.schema";

import { eq } from "drizzle-orm";

export class AgendamentoRepository {
  async create(data: typeof agendamentosTable.$inferInsert) {
    const [agendamento] = await db
      .insert(agendamentosTable)
      .values(data)
      .returning();

    return agendamento;
  }

  async findAll() {
    return await db.select().from(agendamentosTable);
  }

  async update(
    id: number,
    data: Partial<typeof agendamentosTable.$inferInsert>
  ) {
    const [agendamento] = await db
      .update(agendamentosTable)
      .set(data)
      .where(eq(agendamentosTable.id, id))
      .returning();

    return agendamento;
  }

  async delete(id: number) {
    await db
      .delete(agendamentosTable)
      .where(eq(agendamentosTable.id, id));
  }
}