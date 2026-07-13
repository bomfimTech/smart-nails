import type { Horario } from "@/shared/types/domain/horario";

type HorarioListProps = {
  horarios: Horario[];
  onEditarHorario: (id: number, data: Partial<Omit<Horario, "id">>) => void;
  onRemoverHorario: (id: number) => void;
};

export function HorarioList({
  horarios,
  onEditarHorario,
  onRemoverHorario,
}: HorarioListProps) {
  if (horarios.length === 0) {
    return <p className="text-zinc-500">Nenhum horário cadastrado.</p>;
  }

  function handleEditar(horario: Horario) {
    const diaSemana = prompt("Dia da semana:", horario.diaSemana);
    const horaInicio = prompt("Hora início:", horario.horaInicio);
    const horaFim = prompt("Hora fim:", horario.horaFim);

    if (!diaSemana || !horaInicio || !horaFim) return;

    onEditarHorario(horario.id, {
      diaSemana,
      horaInicio,
      horaFim,
      ativo: horario.ativo,
    });
  }

  return (
    <div className="space-y-3">
      {horarios.map((horario) => (
        <div
          key={horario.id}
          className="flex items-center justify-between rounded-lg border border-zinc-200 p-4"
        >
          <div>
            <h3 className="font-semibold">{horario.diaSemana}</h3>
            <p>
              {horario.horaInicio} às {horario.horaFim}
            </p>
            <p>Status: {horario.ativo ? "Ativo" : "Inativo"}</p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleEditar(horario)}
              className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Editar
            </button>

            <button
              type="button"
              onClick={() => onRemoverHorario(horario.id)}
              className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600"
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}