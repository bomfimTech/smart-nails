import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const servicos = sqliteTable("servicos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull(),
  duracao: integer("duracao").notNull(),
  preco: real("preco").notNull(),
});