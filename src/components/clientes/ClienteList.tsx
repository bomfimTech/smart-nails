import type { Cliente } from "@/shared/types/cliente";

type ClienteListProps = {
  clientes: Cliente[];
};

export function ClienteList({ clientes }: ClienteListProps) {
  if (clientes.length === 0) {
    return <p className="text-zinc-500">Nenhum cliente cadastrado.</p>;
  }

  return (
    <div className="space-y-3">
      {clientes.map((cliente) => (
        <div key={cliente.id} className="rounded-lg border border-zinc-200 p-4">
          <h3 className="font-semibold text-zinc-900">{cliente.nome}</h3>
          <p className="text-sm text-zinc-600">{cliente.telefone}</p>
          <p className="text-sm text-zinc-600">{cliente.email}</p>
        </div>
      ))}
    </div>
  );
}