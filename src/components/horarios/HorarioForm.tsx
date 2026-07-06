"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useHorarios } from "@/hooks/useHorarios";

export function HorarioForm() {
  const { criarHorario } = useHorarios();

  const [diaSemana, setDiaSemana] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await criarHorario({
      diaSemana,
      horaInicio,
      horaFim,
    });

    setDiaSemana("");
    setHoraInicio("");
    setHoraFim("");

    alert("Horário cadastrado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Dia da semana"
        placeholder="Ex: Segunda-feira"
        value={diaSemana}
        onChange={setDiaSemana}
      />

      <Input
        label="Hora início"
        placeholder="Ex: 08:00"
        type="time"
        value={horaInicio}
        onChange={setHoraInicio}
      />

      <Input
        label="Hora fim"
        placeholder="Ex: 18:00"
        type="time"
        value={horaFim}
        onChange={setHoraFim}
      />

      <Button texto="Cadastrar Horário" type="submit" />
    </form>
  );
}