import { StatusAgendamento } from "@/shared/types/domain/agendamento";

export type CreateAgendamentoDTO = {
  clienteId: number;
  servicoId: number;

  data: string;
  horaInicio: string;

  status: StatusAgendamento;
};