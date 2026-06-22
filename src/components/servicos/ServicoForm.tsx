"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useServicos } from "@/hooks/useServicos";

export function ServicoForm() {
  const { criarServico } = useServicos();

  const [nome, setNome] = useState("");
  const [duracao, setDuracao] = useState("");
  const [preco, setPreco] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await criarServico({
      nome,
      duracao: Number(duracao),
      preco: Number(preco),
    });

    setNome("");
    setDuracao("");
    setPreco("");

    alert("Serviço cadastrado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Nome" placeholder="Ex: Alongamento em gel" value={nome} onChange={setNome} />
      <Input label="Duração" placeholder="Ex: 60" type="number" value={duracao} onChange={setDuracao} />
      <Input label="Preço" placeholder="Ex: 120" type="number" value={preco} onChange={setPreco} />

      <Button texto="Cadastrar Serviço" type="submit" />
    </form>
  );
}