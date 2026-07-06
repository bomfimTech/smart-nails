import { NextResponse } from "next/server";

import { CreateHorarioHandler } from "@/modules/horarios/handlers/create-horario.handler";
import { ListHorariosHandler } from "@/modules/horarios/handlers/list-horarios.handler";

export async function POST(request: Request) {
  const body = await request.json();

  const handler = new CreateHorarioHandler();
  const horario = await handler.handle(body);

  return NextResponse.json(horario, { status: 201 });
}

export async function GET() {
  const handler = new ListHorariosHandler();

  const horarios = await handler.handle();

  return NextResponse.json(horarios);
}