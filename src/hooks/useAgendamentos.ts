import { useState } from "react";

import type { Agendamento } from "@/shared/types/agendamento";

export function useAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  const carregarAgendamentos = async () => {
    console.log("Carregando agendamentos...");
  };

  return {
    agendamentos,
    carregarAgendamentos,
  };
}