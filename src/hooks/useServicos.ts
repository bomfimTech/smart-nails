import { useState } from "react";

import type { Servico } from "@/shared/types/servico";

export function useServicos() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  const carregarServicos = async () => {
    console.log("Carregando serviços...");
  };

  return {
    servicos,
    carregarServicos,
  };
}