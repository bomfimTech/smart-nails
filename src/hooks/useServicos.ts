import { useState } from "react";

import type { Servico } from "@/shared/types/servico";

type CreateServicoDTO = {
  nome: string;
  duracao: number;
  preco: number;
};

export function useServicos() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  const carregarServicos = async () => {
    const response = await fetch("/api/servicos");
    const data = await response.json();

    setServicos(data);
  };

  const criarServico = async (data: CreateServicoDTO) => {
    const response = await fetch("/api/servicos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const novoServico = await response.json();

    setServicos((servicosAtuais) => [...servicosAtuais, novoServico]);

    return novoServico;
  };

  return {
    servicos,
    carregarServicos,
    criarServico,
  };
}