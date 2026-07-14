"use client";

import { useState } from "react";

import type { Agendamento } from "@/shared/types/domain/agendamento";
import type { CreateAgendamentoDTO } from "@/modules/agendamentos/dto/create-agendamento.dto";

export function useAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  const carregarAgendamentos = async () => {
    const response = await fetch("/api/agendamentos");

    const data = await response.json();

    setAgendamentos(data);
  };

  const criarAgendamento = async (data: CreateAgendamentoDTO) => {
    const response = await fetch("/api/agendamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const novoAgendamento = await response.json();

    setAgendamentos((agendamentosAtuais) => [
      ...agendamentosAtuais,
      novoAgendamento,
    ]);

    return novoAgendamento;
  };

  return {
    agendamentos,
    carregarAgendamentos,
    criarAgendamento,
  };
}