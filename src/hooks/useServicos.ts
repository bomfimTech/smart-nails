import { useState } from "react";

import type { Servico } from "@/shared/types/domain/servico";

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

    const removerServico = async (id: number) => {
    await fetch("/api/servicos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setServicos((servicosAtuais) =>
      servicosAtuais.filter((servico) => servico.id !== id)
    );
  };

    const editarServico = async (
    id: number,
    data: Partial<CreateServicoDTO>
  ) => {
    const response = await fetch("/api/servicos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...data }),
    });

    const servicoAtualizado = await response.json();

    setServicos((servicosAtuais) =>
      servicosAtuais.map((servico) =>
        servico.id === id ? servicoAtualizado : servico
      )
    );

    return servicoAtualizado;
  };

  return {
    servicos,
    carregarServicos,
    criarServico,
    removerServico,
    editarServico,
  };
}