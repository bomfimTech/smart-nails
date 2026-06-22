import { NextResponse } from "next/server";

import { ListServicosHandler } from "@/modules/servicos/handlers/list-servicos.handler";
import { CreateServicoHandler } from "@/modules/servicos/handlers/create-servico.handler";
import { DeleteServicoHandler } from "@/modules/servicos/handlers/delete-servico.handler";
import { UpdateServicoHandler } from "@/modules/servicos/handlers/update-servico.handler";

export async function POST(request: Request) {
  const body = await request.json();

  const handler = new CreateServicoHandler();
  const servico = await handler.handle(body);

  return NextResponse.json(servico, { status: 201 });
}

export async function GET() {
  const handler = new ListServicosHandler();

  const servicos = await handler.handle();

  return NextResponse.json(servicos);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const handler = new DeleteServicoHandler();

  await handler.handle(id);

  return NextResponse.json(
    { message: "Serviço removido com sucesso" },
    { status: 200 }
  );
}

export async function PUT(request: Request) {
  const { id, ...data } = await request.json();

  const handler = new UpdateServicoHandler();

  const servico = await handler.handle(id, data);

  return NextResponse.json(servico);
}