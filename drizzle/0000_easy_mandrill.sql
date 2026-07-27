CREATE TABLE "agendamentos" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agendamentos_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"data" text NOT NULL,
	"horaInicio" text NOT NULL,
	"clienteId" integer NOT NULL,
	"servicoId" integer NOT NULL,
	"status" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "clientes" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "clientes_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"nome" text NOT NULL,
	"telefone" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "horarios" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "horarios_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"diaSemana" text NOT NULL,
	"horaInicio" text NOT NULL,
	"horaFim" text NOT NULL,
	"ativo" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "servicos" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "servicos_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"nome" text NOT NULL,
	"duracao" integer NOT NULL,
	"preco" real NOT NULL
);
--> statement-breakpoint
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_clienteId_clientes_id_fk" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_servicoId_servicos_id_fk" FOREIGN KEY ("servicoId") REFERENCES "public"."servicos"("id") ON DELETE no action ON UPDATE no action;