import { useState } from "react";

import type { Cliente } from "@/shared/types/cliente";

export function useClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const carregarClientes = async () => {
    console.log("Carregando clientes...");
  };

  return {
    clientes,
    carregarClientes,
  };
}