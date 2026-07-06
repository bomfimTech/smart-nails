import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const horarios = sqliteTable("horarios", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  diaSemana: text("dia_semana").notNull(),
  horaInicio: text("hora_inicio").notNull(),
  horaFim: text("hora_fim").notNull(),
  ativo: integer("ativo", { mode: "boolean" }).notNull(),
});