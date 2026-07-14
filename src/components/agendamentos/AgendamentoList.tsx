import type { Agendamento } from "@/shared/types/domain/agendamento";

type Props = {
  agendamentos: Agendamento[];
};

export function AgendamentoList({
  agendamentos,
}: Props) {
  return (
    <div>
      Total de agendamentos: {agendamentos.length}
    </div>
  );
}