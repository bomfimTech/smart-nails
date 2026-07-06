"use client";

import { useEffect } from "react";

import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { HorarioForm } from "@/components/horarios/HorarioForm";
import { HorarioList } from "@/components/horarios/HorarioList";
import { useHorarios } from "@/hooks/useHorarios";

export default function HorariosPage() {
  const { horarios, carregarHorarios } = useHorarios();

  useEffect(() => {
    carregarHorarios();
  }, []);

  return (
    <div className="space-y-6">
      <PageTitle
        title="Horários"
        subtitle="Gerencie os horários disponíveis"
      />

      <Card>
        <HorarioForm />
      </Card>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Horários cadastrados
        </h2>

        <HorarioList horarios={horarios} />
      </Card>
    </div>
  );
}