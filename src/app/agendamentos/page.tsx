"use client";

import { useEffect } from "react";

import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { useAgendamentos } from "@/hooks/useAgendamentos";

import { AgendamentoForm } from "@/components/agendamentos/AgendamentoForm";
import { AgendamentoList } from "@/components/agendamentos/AgendamentoList";

export default function AgendamentosPage() {
  const {
    agendamentos,
    carregarAgendamentos,
  } = useAgendamentos();

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  return (
    <div className="space-y-6">
      <PageTitle
        title="Agendamentos"
        subtitle="Gerencie os agendamentos do sistema"
      />

      <Card>
        <AgendamentoForm />
      </Card>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Agendamentos cadastrados
        </h2>

        <AgendamentoList
          agendamentos={agendamentos}
        />
      </Card>
    </div>
  );
}