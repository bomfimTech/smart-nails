import { NextResponse } from "next/server";

import { criarPrestadorHandler } from "@/modules/prestador/handlers/prestador.handler";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const prestador = await criarPrestadorHandler(body);

    return NextResponse.json(prestador, { status: 201 });
  } catch (error) {
    const mensagem =
      error instanceof Error
        ? error.message
        : "Erro ao criar prestador.";

    return NextResponse.json(
      { erro: mensagem },
      { status: 400 },
    );
  }
}