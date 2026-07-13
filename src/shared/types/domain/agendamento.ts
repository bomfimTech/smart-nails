export type StatusAgendamento =
  | "Agendado"
  | "Concluído"
  | "Cancelado";

export type Agendamento = {
  id: number;

  clienteId: number;
  servicoId: number;

  data: string;
  horaInicio: string;

  status: StatusAgendamento;
};