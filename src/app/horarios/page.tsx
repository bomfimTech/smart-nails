"use client";

import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { HorarioForm } from "@/components/horarios/HorarioForm";

export default function HorariosPage() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Horários"
        subtitle="Gerencie os horários disponíveis para atendimento"
      />

      <Card>
        <HorarioForm />
      </Card>
    </div>
  );
}