import { integer, pgTable, real, text } from "drizzle-orm/pg-core";

export const servicos = pgTable("servicos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  nome: text().notNull(),
  duracao: integer().notNull(),
  preco: real().notNull(),
});