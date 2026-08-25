
import type { Servico } from "./servico";

export interface Agendamento {
  id: number;
  clienteId: number;
  servicos: Servico[];
  data: string;
  horaInicio: string;
  horaFim: string;
  status: string;
}