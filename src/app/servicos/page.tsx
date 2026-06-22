"use client";

import { useEffect } from "react";

import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { ServicoForm } from "@/components/servicos/ServicoForm";
import { ServicoList } from "@/components/servicos/ServicoList";
import { useServicos } from "@/hooks/useServicos";

export default function ServicosPage() {
  const { servicos, carregarServicos } = useServicos();

  useEffect(() => {
    carregarServicos();
  }, []);

  return (
    <div className="space-y-6">
      <PageTitle title="Serviços" subtitle="Gerencie os serviços oferecidos" />

      <Card>
        <ServicoForm />
      </Card>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">Serviços cadastrados</h2>
        <ServicoList servicos={servicos} />
      </Card>
    </div>
  );
}