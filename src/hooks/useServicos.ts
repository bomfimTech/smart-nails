import { useState } from "react";

import { carregarServicosAction } from "@/actions/servicos/carregar-servicos.action";
import { criarServicoAction } from "@/actions/servicos/criar-servico.action";
import { editarServicoAction } from "@/actions/servicos/editar-servico.action";
import { removerServicoAction } from "@/actions/servicos/remover-servico.action";

import type { Servico } from "@/shared/types/domain/servico";

import type { CreateServicoDTO } from "@/modules/servicos/dto/create-servico.dto";

export function useServicos() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  const carregarServicos = async () => {
    const data = await carregarServicosAction();

    setServicos(data);
  };

  const criarServico = async (data: CreateServicoDTO) => {
    const novoServico = await criarServicoAction(data);

    setServicos((servicosAtuais) => [
      ...servicosAtuais,
      novoServico,
    ]);

    return novoServico;
  };

  const editarServico = async (
    id: number,
    data: Partial<CreateServicoDTO>
  ) => {
    const servicoAtualizado = await editarServicoAction(id, data);

    setServicos((servicosAtuais) =>
      servicosAtuais.map((servico) =>
        servico.id === id ? servicoAtualizado : servico
      )
    );

    return servicoAtualizado;
  };

  const removerServico = async (id: number) => {
    await removerServicoAction(id);

    setServicos((servicosAtuais) =>
      servicosAtuais.filter((servico) => servico.id !== id)
    );
  };

  return {
    servicos,
    carregarServicos,
    criarServico,
    editarServico,
    removerServico,
  };
}