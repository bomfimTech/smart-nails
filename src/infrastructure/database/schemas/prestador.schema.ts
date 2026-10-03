
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const prestadoresTable = pgTable("prestadores", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  nome: text().notNull(),
  ativo: boolean().notNull().default(true),
});