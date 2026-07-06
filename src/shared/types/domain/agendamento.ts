export type Agendamento = {
  id: number;
  data: Date;
  hora: string;
  clienteId: number;
  servicoId: number;
  status: string;
};