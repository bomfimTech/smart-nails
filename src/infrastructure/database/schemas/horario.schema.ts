import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const horarios = pgTable("horarios", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  diaSemana: text().notNull(),
  horaInicio: text().notNull(),
  horaFim: text().notNull(),
  ativo: boolean().notNull(),
});