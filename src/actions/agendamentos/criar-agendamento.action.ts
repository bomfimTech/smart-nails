"use server";

import { revalidatePath } from "next/cache";

import type { CreateAgendamentoDTO } from "@/modules/agendamentos/dto/create-agendamento.dto";
import type { Agendamento } from "@/shared/types/domain/agendamento";
// ajuste o import abaixo pro caminho real do seu UseCase
import { CriarAgendamentoUseCase } from "@/modules/agendamentos/usecases/criar-agendamento.usecase";

type ActionResult =
  | { success: true; data: Agendamento }
  | { success: false; error: string };

export async function criarAgendamentoAction(
  data: CreateAgendamentoDTO
): Promise<ActionResult> {
  try {
    const novoAgendamento = await CriarAgendamentoUseCase.execute(data);

    revalidatePath("/agendamentos"); // ajuste pra sua rota

    return { success: true, data: novoAgendamento };
  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}