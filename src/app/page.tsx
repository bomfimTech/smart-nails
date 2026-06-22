import { Card } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Dashboard"
        subtitle="Bem-vinda ao Smart Nails"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <h2 className="text-lg font-semibold">Clientes</h2>
          <p className="text-3xl font-bold">0</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Serviços</h2>
          <p className="text-3xl font-bold">0</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Horários</h2>
          <p className="text-3xl font-bold">0</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Agendamentos</h2>
          <p className="text-3xl font-bold">0</p>
        </Card>
      </div>
    </div>
  );
}