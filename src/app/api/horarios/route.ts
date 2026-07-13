import { NextResponse } from "next/server";

import { CreateHorarioHandler } from "@/modules/horarios/handlers/create-horario.handler";
import { ListHorariosHandler } from "@/modules/horarios/handlers/list-horarios.handler";
import { DeleteHorarioHandler } from "@/modules/horarios/handlers/delete-horario.handler";
import { UpdateHorarioHandler } from "@/modules/horarios/handlers/update-horario.handler";

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

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const handler = new DeleteHorarioHandler();

  await handler.handle(id);

  return NextResponse.json(
    { message: "Horário removido com sucesso" },
    { status: 200 }
  );
}

export async function PUT(request: Request) {
  const { id, ...data } = await request.json();

  const handler = new UpdateHorarioHandler();

  const horario = await handler.handle(id, data);

  return NextResponse.json(horario);
}