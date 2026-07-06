import type { Servico } from "@/shared/types/domain/servico";

type ServicoListProps = {
  servicos: Servico[];
  onEditarServico: (
    id: number,
    data: Partial<Omit<Servico, "id">>
  ) => void;
  onRemoverServico: (id: number) => void;
};

export function ServicoList({
  servicos,
  onEditarServico,
  onRemoverServico,
}: ServicoListProps) {
  if (servicos.length === 0) {
    return <p className="text-zinc-500">Nenhum serviço cadastrado.</p>;
  }

  function handleEditar(servico: Servico) {
    const nome = prompt("Nome:", servico.nome);
    const duracao = prompt("Duração:", String(servico.duracao));
    const preco = prompt("Preço:", String(servico.preco));

    if (!nome || !duracao || !preco) return;

    onEditarServico(servico.id, {
      nome,
      duracao: Number(duracao),
      preco: Number(preco),
    });
  }

  return (
    <div className="space-y-3">
      {servicos.map((servico) => (
        <div
          key={servico.id}
          className="flex items-center justify-between rounded-lg border border-zinc-200 p-4"
        >
          <div>
            <h3 className="font-semibold text-zinc-900">{servico.nome}</h3>
            <p className="text-sm text-zinc-600">
              Duração: {servico.duracao} min
            </p>
            <p className="text-sm text-zinc-600">
              Preço: R$ {servico.preco}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleEditar(servico)}
              className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Editar
            </button>

            <button
              type="button"
              onClick={() => onRemoverServico(servico.id)}
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