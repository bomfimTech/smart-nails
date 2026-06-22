import { NextResponse } from "next/server";

import { CreateClienteHandler } from "@/modules/clientes/handlers/create-cliente.handlers";

export async function POST(request: Request) {
  const body = await request.json();

  const handler = new CreateClienteHandler();
  const cliente = await handler.handle(body);

  return NextResponse.json(cliente, { status: 201 });
}