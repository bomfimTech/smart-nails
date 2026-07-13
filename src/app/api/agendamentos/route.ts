import { NextResponse } from "next/server";

import { AgendamentoRepository } from "@/modules/agendamentos/repositories/agendamento.repository";
import { CreateAgendamentoHandler } from "@/modules/agendamentos/handlers/create-agendamento.handler";

export async function GET() {
  const repository = new AgendamentoRepository();

  const agendamentos = await repository.findAll();

  return NextResponse.json(agendamentos);
}

export async function POST(request: Request) {
  const body = await request.json();

  const handler = new CreateAgendamentoHandler();

  const agendamento = await handler.handle(body);

  return NextResponse.json(agendamento, { status: 201 });
}