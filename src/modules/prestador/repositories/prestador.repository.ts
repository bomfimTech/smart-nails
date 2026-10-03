
import { and, eq } from "drizzle-orm";

import { db } from "@/infrastructure/database/db";
import { prestadorServicosTable } from "@/infrastructure/database/schemas/prestador-servico.schema";
import { prestadoresTable } from "@/infrastructure/database/schemas/prestador.schema";

export class PrestadorRepository {
  async criar(nome: string) {
    const [prestador] = await db
      .insert(prestadoresTable)
      .values({
        nome,
      })
      .returning();

    return prestador;
  }

  async listar() {
    return await db.select().from(prestadoresTable);
  }

  async buscarPorId(id: number) {
    const [prestador] = await db
      .select()
      .from(prestadoresTable)
      .where(eq(prestadoresTable.id, id));

    return prestador;
  }

  async atualizar(
    id: number,
    dados: {
      nome?: string;
      ativo?: boolean;
    },
  ) {
    const [prestador] = await db
      .update(prestadoresTable)
      .set(dados)
      .where(eq(prestadoresTable.id, id))
      .returning();

    return prestador;
  }

  async excluir(id: number) {
    await db
      .delete(prestadoresTable)
      .where(eq(prestadoresTable.id, id));
  }

  async findAtivosPorServico(servicoId: number) {
    return await db
      .select({
        id: prestadoresTable.id,
        nome: prestadoresTable.nome,
      })
      .from(prestadoresTable)
      .innerJoin(
        prestadorServicosTable,
        eq(
          prestadorServicosTable.prestadorId,
          prestadoresTable.id,
        ),
      )
      .where(
        and(
          eq(prestadorServicosTable.servicoId, servicoId),
          eq(prestadoresTable.ativo, true),
        ),
      );
  }
}