import { useState } from "react";

import type { Horario } from "@/shared/types/horario";

export function useHorarios() {
  const [horarios, setHorarios] = useState<Horario[]>([]);

  const carregarHorarios = async () => {
    console.log("Carregando horários...");
  };

  return {
    horarios,
    carregarHorarios,
  };
}