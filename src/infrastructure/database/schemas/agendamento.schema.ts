import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { clientes } from "./cliente.schema";
import { servicos } from "./servico.schema";

export const agendamentosTable = sqliteTable("agendamentos", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  data: text("data").notNull(),

  horaInicio: text("hora_inicio").notNull(),

  clienteId: integer("cliente_id")
    .notNull()
    .references(() => clientes.id),

  servicoId: integer("servico_id")
    .notNull()
    .references(() => servicos.id),

  status: text("status").notNull(),
});