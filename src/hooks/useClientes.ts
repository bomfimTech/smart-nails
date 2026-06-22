import { useState } from "react";

import type { CreateClienteDTO } from "@/modules/clientes/dto/create-cliente.dto";
import type { Cliente } from "@/shared/types/cliente";

export function useClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const criarCliente = async (data: CreateClienteDTO) => {
    const response = await fetch("/api/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const novoCliente = await response.json();

    setClientes((clientesAtuais) => [...clientesAtuais, novoCliente]);

    return novoCliente;
  };

  return {
    clientes,
    criarCliente,
  };
}