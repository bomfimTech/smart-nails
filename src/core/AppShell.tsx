import Link from "next/link";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-zinc-100">
      <header className="border-b border-zinc-200 bg-white px-6 py-4">
        <h1 className="text-xl font-bold text-pink-600">Smart Nails</h1>
        <p className="text-sm text-zinc-500">Sistema de agendamentos</p>
      </header>

      <div className="flex">
        <aside className="min-h-[calc(100vh-73px)] w-64 border-r border-zinc-200 bg-white p-4">
          <nav className="flex flex-col gap-2">
            <Link className="rounded-lg px-3 py-2 hover:bg-pink-50" href="/">
              Início
            </Link>

            <Link
              className="rounded-lg px-3 py-2 hover:bg-pink-50"
              href="/clientes"
            >
              Clientes
            </Link>

            <Link
              className="rounded-lg px-3 py-2 hover:bg-pink-50"
              href="/servicos"
            >
              Serviços
            </Link>

            <Link
              className="rounded-lg px-3 py-2 hover:bg-pink-50"
              href="/horarios"
            >
              Horários
            </Link>

            <Link
              className="rounded-lg px-3 py-2 hover:bg-pink-50"
              href="/agendamentos"
            >
              Agendamentos
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}