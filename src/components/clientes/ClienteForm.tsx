"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useClientes } from "@/hooks/useClientes";

export function ClienteForm() {
  const { criarCliente } = useClientes();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await criarCliente({
      nome,
      telefone,
      email,
    });

    setNome("");
    setTelefone("");
    setEmail("");

    alert("Cliente cadastrado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Nome"
        placeholder="Digite o nome do cliente"
        value={nome}
        onChange={setNome}
      />

      <Input
        label="Telefone"
        placeholder="Digite o telefone"
        value={telefone}
        onChange={setTelefone}
      />

      <Input
        label="E-mail"
        placeholder="Digite o e-mail"
        type="email"
        value={email}
        onChange={setEmail}
      />

      <Button texto="Cadastrar Cliente" type="submit" />
    </form>
  );
}