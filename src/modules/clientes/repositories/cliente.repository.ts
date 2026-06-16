import { eq } from "drizzle-orm";

import { db } from "@/infrastructure/database";
import { clientes } from "@/infrastructure/database/schemas/cliente.schema";
import type { Cliente } from "@/shared/types/cliente";

export class ClienteRepository {
  async list() {
    return db.select().from(clientes);
  }

  async findById(id: number) {
    const result = await db
      .select()
      .from(clientes)
      .where(eq(clientes.id, id));

    return result[0];
  }

  async create(cliente: Omit<Cliente, "id">) {
    const result = await db
      .insert(clientes)
      .values(cliente)
      .returning();

    return result[0];
  }

  async update(id: number, cliente: Partial<Omit<Cliente, "id">>) {
    const result = await db
      .update(clientes)
      .set(cliente)
      .where(eq(clientes.id, id))
      .returning();

    return result[0];
  }

  async delete(id: number) {
    await db.delete(clientes).where(eq(clientes.id, id));
  }
}