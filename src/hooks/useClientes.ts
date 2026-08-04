import { useState } from "react";

import { carregarClientesAction } from "@/actions/clientes/carregar-clientes.action";
import { criarClienteAction } from "@/actions/clientes/criar-cliente.action";
import { editarClienteAction } from "@/actions/clientes/editar-cliente.action";
import { removerClienteAction } from "@/actions/clientes/remover-cliente.action";

import type { CreateClienteDTO } from "@/modules/clientes/dto/create-cliente.dto";
import type { Cliente } from "@/shared/types/domain/cliente";

export function useClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const carregarClientes = async () => {
    const data = await carregarClientesAction();

    setClientes(data);
  };

  const criarCliente = async (data: CreateClienteDTO) => {
    const novoCliente = await criarClienteAction(data);

    setClientes((clientesAtuais) => [
      ...clientesAtuais,
      novoCliente,
    ]);

    return novoCliente;
  };

  const editarCliente = async (
    id: number,
    data: Partial<CreateClienteDTO>
  ) => {
    const clienteAtualizado = await editarClienteAction(id, data);

    setClientes((clientesAtuais) =>
      clientesAtuais.map((cliente) =>
        cliente.id === id ? clienteAtualizado : cliente
      )
    );

    return clienteAtualizado;
  };

  const removerCliente = async (id: number) => {
    await removerClienteAction(id);

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