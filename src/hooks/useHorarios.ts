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

    const removerHorario = async (id: number) => {
    await fetch("/api/horarios", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setHorarios((horariosAtuais) =>
      horariosAtuais.filter((horario) => horario.id !== id)
    );
  };

    const editarHorario = async (
    id: number,
    data: Partial<CreateHorarioDTO>
  ) => {
    const response = await fetch("/api/horarios", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...data }),
    });

    const horarioAtualizado = await response.json();

    setHorarios((horariosAtuais) =>
      horariosAtuais.map((horario) =>
        horario.id === id ? horarioAtualizado : horario
      )
    );

    return horarioAtualizado;
  };

  return {
    horarios,
    carregarHorarios,
    criarHorario,
    removerHorario,
    editarHorario,
  };
}