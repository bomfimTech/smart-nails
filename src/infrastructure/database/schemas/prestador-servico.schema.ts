
import { integer, pgTable } from "drizzle-orm/pg-core";

import { prestadoresTable } from "./prestador.schema";
import { servicos } from "./servico.schema";

export const prestadorServicosTable = pgTable("prestador_servicos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  prestadorId: integer().notNull().references(() => prestadoresTable.id),
  servicoId: integer().notNull().references(() => servicos.id),
});