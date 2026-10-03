CREATE TABLE "prestador_servicos" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "prestador_servicos_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"prestadorId" integer NOT NULL,
	"servicoId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "prestadores" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "prestadores_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"nome" text NOT NULL,
	"ativo" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
ALTER TABLE "agendamentos" ADD COLUMN "horaFim" text NOT NULL;--> statement-breakpoint
ALTER TABLE "prestador_servicos" ADD CONSTRAINT "prestador_servicos_prestadorId_prestadores_id_fk" FOREIGN KEY ("prestadorId") REFERENCES "public"."prestadores"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prestador_servicos" ADD CONSTRAINT "prestador_servicos_servicoId_servicos_id_fk" FOREIGN KEY ("servicoId") REFERENCES "public"."servicos"("id") ON DELETE no action ON UPDATE no action;