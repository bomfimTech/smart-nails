"use client";

import { useEffect, useState } from "react";

import type { Cliente } from "@/shared/types/domain/cliente";
import type { Servico } from "@/shared/types/domain/servico";

export function AgendamentoForm() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);

  const [clienteId, setClienteId] = useState("");
  const [servicoId, setServicoId] = useState("");

  const [data, setData] = useState("");
  const [horaInicio, setHoraInicio] = useState("");

  const [status, setStatus] = useState("Agendado");

  const servicoSelecionado = servicos.find(
    (servico) => servico.id === Number(servicoId)
  );

  useEffect(() => {
    async function carregarDados() {
      const [clientesResponse, servicosResponse] = await Promise.all([
        fetch("/api/clientes"),
        fetch("/api/servicos"),
      ]);

      const clientesData = await clientesResponse.json();
      const servicosData = await servicosResponse.json();

      setClientes(clientesData);
      setServicos(servicosData);
    }

    carregarDados();
  }, []);

  return (
    <form className="space-y-5">
      <div>
        <label className="mb-1 block font-medium">
          Cliente
        </label>

        <select
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
          className="w-full rounded-lg border p-2"
        >
          <option value="">Selecione um cliente</option>

          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Serviço
        </label>

        <select
          value={servicoId}
          onChange={(e) => setServicoId(e.target.value)}
          className="w-full rounded-lg border p-2"
        >
          <option value="">Selecione um serviço</option>

          {servicos.map((servico) => (
            <option key={servico.id} value={servico.id}>
              {servico.nome}
            </option>
          ))}
        </select>

        {servicoSelecionado && (
          <div className="mt-4 rounded-xl border border-pink-200 bg-pink-50 p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-pink-700">
              💅 {servicoSelecionado.nome}
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="text-sm text-gray-500">
                  Duração
                </p>

                <p className="mt-1 text-lg font-semibold">
                  ⏱ {servicoSelecionado.duracao} min
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="text-sm text-gray-500">
                  Valor
                </p>

                <p className="mt-1 text-lg font-semibold text-green-600">
                  💰 R$ {servicoSelecionado.preco.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Data
        </label>

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Hora
        </label>

        <select
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
          className="w-full rounded-lg border p-2"
        >
          <option value="">Selecione um horário</option>

          <option value="08:00">08:00</option>
          <option value="08:30">08:30</option>
          <option value="09:00">09:00</option>
          <option value="09:30">09:30</option>
          <option value="10:00">10:00</option>
          <option value="10:30">10:30</option>
          <option value="11:00">11:00</option>
          <option value="11:30">11:30</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Status
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-lg border p-2"
        >
          <option value="Agendado">Agendado</option>
          <option value="Concluído">Concluído</option>
          <option value="Cancelado">Cancelado</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700"
      >
        Agendar
      </button>
    </form>
  );
}