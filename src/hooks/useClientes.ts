import { useState } from "react";

import type { CreateClienteDTO } from "@/modules/clientes/dto/create-cliente.dto";
import type { Cliente } from "@/shared/types/cliente";

export function useClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const carregarClientes = async () => {
    const response = await fetch("/api/clientes");
    const data = await response.json();

    setClientes(data);
  };

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

  const editarCliente = async (
    id: number,
    data: Partial<CreateClienteDTO>
  ) => {
    const response = await fetch("/api/clientes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...data }),
    });

    const clienteAtualizado = await response.json();

    setClientes((clientesAtuais) =>
      clientesAtuais.map((cliente) =>
        cliente.id === id ? clienteAtualizado : cliente
      )
    );

    return clienteAtualizado;
  };

  const removerCliente = async (id: number) => {
    await fetch("/api/clientes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setClientes((clientesAtuais) =>
      clientesAtuais.filter((cliente) => cliente.id !== id)
    );
  };

  return {
    clientes,
    carregarClientes,
    criarCliente,
    editarCliente,
    removerCliente,
  };
}