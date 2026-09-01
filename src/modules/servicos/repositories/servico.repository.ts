import { eq } from "drizzle-orm";

import { db } from "@/infrastructure/database/db";
import { servicos } from "@/infrastructure/database/schemas/servico.schema";
import type { Servico } from "@/shared/types/domain/servico";

export class ServicoRepository {
  async list() {
    return db.select().from(servicos);
  }

  async findById(id: number) {
    const result = await db.select().from(servicos).where(eq(servicos.id, id));
    return result[0];
  }

  async create(servico: Omit<Servico, "id">) {
    const result = await db.insert(servicos).values(servico).returning();
    return result[0];
  }

  async update(id: number, servico: Partial<Omit<Servico, "id">>) {
    const result = await db
      .update(servicos)
      .set(servico)
      .where(eq(servicos.id, id))
      .returning();

    return result[0];
  }

  async delete(id: number) {
    await db.delete(servicos).where(eq(servicos.id, id));
  }
}