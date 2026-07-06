import type { Horario } from "@/shared/types/domain/horario";

type HorarioListProps = {
  horarios: Horario[];
};

export function HorarioList({
  horarios,
}: HorarioListProps) {
  if (horarios.length === 0) {
    return (
      <p className="text-zinc-500">
        Nenhum horário cadastrado.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {horarios.map((horario) => (
        <div
          key={horario.id}
          className="rounded-lg border border-zinc-200 p-4"
        >
          <h3 className="font-semibold">
            {horario.diaSemana}
          </h3>

          <p>
            {horario.horaInicio} às {horario.horaFim}
          </p>

          <p>
            Status:{" "}
            {horario.ativo ? "Ativo" : "Inativo"}
          </p>
        </div>
      ))}
    </div>
  );
}