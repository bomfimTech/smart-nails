import { useState } from "react";

import type { Horario } from "@/shared/types/domain/horario";
import type { CreateHorarioDTO } from "@/modules/horarios/dto/create-horario.dto";

export function useHorarios() {
  const [horarios, setHorarios] = useState<Horario[]>([]);

  const carregarHorarios = async () => {
    const response = await fetch("/api/horarios");

    const data = await response.json();

    setHorarios(data);
  };

  const criarHorario = async (data: CreateHorarioDTO) => {
    const response = await fetch("/api/horarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const novoHorario = await response.json();

    setHorarios((horariosAtuais) => [
      ...horariosAtuais,
      novoHorario,
    ]);

    return novoHorario;
  };

  return {
    horarios,
    carregarHorarios,
    criarHorario,
  };
}