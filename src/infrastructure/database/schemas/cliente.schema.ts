import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const clientes = pgTable("clientes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  nome: text().notNull(),
  telefone: text().notNull(),
  email: text().notNull(),
});