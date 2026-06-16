CREATE TABLE `agendamentos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`data` text NOT NULL,
	`hora` text NOT NULL,
	`cliente_id` integer NOT NULL,
	`servico_id` integer NOT NULL,
	`status` text NOT NULL,
	FOREIGN KEY (`cliente_id`) REFERENCES `clientes`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`servico_id`) REFERENCES `servicos`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `clientes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL,
	`telefone` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `horarios` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`dia_semana` text NOT NULL,
	`hora_inicio` text NOT NULL,
	`hora_fim` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `servicos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL,
	`duracao` integer NOT NULL,
	`preco` real NOT NULL
);
