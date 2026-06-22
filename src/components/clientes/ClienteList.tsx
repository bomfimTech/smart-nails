import type { Cliente } from "@/shared/types/cliente";

type ClienteListProps = {
  clientes: Cliente[];
  onRemoverCliente: (id: number) => void;
};

export function ClienteList({
  clientes,
  onRemoverCliente,
}: ClienteListProps) {
  if (clientes.length === 0) {
    return <p className="text-zinc-500">Nenhum cliente cadastrado.</p>;
  }

  return (
    <div className="space-y-3">
      {clientes.map((cliente) => (
        <div
          key={cliente.id}
          className="flex items-center justify-between rounded-lg border border-zinc-200 p-4"
        >
          <div>
            <h3 className="font-semibold text-zinc-900">{cliente.nome}</h3>
            <p className="text-sm text-zinc-600">{cliente.telefone}</p>
            <p className="text-sm text-zinc-600">{cliente.email}</p>
          </div>

          <button
            type="button"
            onClick={() => onRemoverCliente(cliente.id)}
            className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}