import type { Servico } from "@/shared/types/servico";

type ServicoListProps = {
  servicos: Servico[];
  onRemoverServico: (id: number) => void;
};

export function ServicoList({
  servicos,
  onRemoverServico,
}: ServicoListProps) {
  if (servicos.length === 0) {
    return <p className="text-zinc-500">Nenhum serviço cadastrado.</p>;
  }

  return (
    <div className="space-y-3">
      {servicos.map((servico) => (
        <div
          key={servico.id}
          className="flex items-center justify-between rounded-lg border border-zinc-200 p-4"
        >
          <div>
            <h3 className="font-semibold text-zinc-900">
              {servico.nome}
            </h3>

            <p className="text-sm text-zinc-600">
              Duração: {servico.duracao} min
            </p>

            <p className="text-sm text-zinc-600">
              Preço: R$ {servico.preco}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onRemoverServico(servico.id)}
            className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}