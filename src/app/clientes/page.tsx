import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { ClienteForm } from "@/components/clientes/ClienteForm";

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Clientes"
        subtitle="Gerencie os clientes cadastrados no sistema"
      />

      <Card>
        <ClienteForm />
      </Card>
    </div>
  );
}