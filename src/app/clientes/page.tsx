"use client";

import { useEffect } from "react";

import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { ClienteForm } from "@/components/clientes/ClienteForm";
import { ClienteList } from "@/components/clientes/ClienteList";
import { useClientes } from "@/hooks/useClientes";

export default function ClientesPage() {
  const { clientes, carregarClientes } = useClientes();

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <div className="space-y-6">
      <PageTitle
        title="Clientes"
        subtitle="Gerencie os clientes cadastrados no sistema"
      />

      <Card>
        <ClienteForm />
      </Card>

      <Card>
        <h2 className="mb-4 text-xl font-semibold">Clientes cadastrados</h2>
        <ClienteList clientes={clientes} />
      </Card>
    </div>
  );
}