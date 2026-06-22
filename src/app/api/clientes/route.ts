import { NextResponse } from "next/server";

import { CreateClienteHandler } from "@/modules/clientes/handlers/create-cliente.handlers";
import { ListClientesHandler } from "@/modules/clientes/handlers/list-clientes.handler";
import { DeleteClienteHandler } from "@/modules/clientes/handlers/delete-cliente.handler";
import { UpdateClienteHandler } from "@/modules/clientes/handlers/update-cliente.handler";

export async function POST(request: Request) {
  const body = await request.json();

  const handler = new CreateClienteHandler();
  const cliente = await handler.handle(body);

  return NextResponse.json(cliente, { status: 201 });
}

export async function GET() {
  const handler = new ListClientesHandler();
  const clientes = await handler.handle();

  return NextResponse.json(clientes);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const handler = new DeleteClienteHandler();

  await handler.handle(id);

  return NextResponse.json(
    { message: "Cliente removido com sucesso" },
    { status: 200 }
  );
}

export async function PUT(request: Request) {
  const { id, ...data } = await request.json();

  const handler = new UpdateClienteHandler();
  const cliente = await handler.handle(id, data);

  return NextResponse.json(cliente);
}