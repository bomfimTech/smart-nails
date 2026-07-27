import { integer, pgTable, text } from "drizzle-orm/pg-core";

import { clientes } from "./cliente.schema";
import { servicos } from "./servico.schema";

export const agendamentosTable = pgTable("agendamentos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  data: text().notNull(),

  horaInicio: text().notNull(),

  clienteId: integer()
    .notNull()
    .references(() => clientes.id),

  servicoId: integer()
    .notNull()
    .references(() => servicos.id),

  status: text().notNull(),
});