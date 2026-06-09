# Relacionamentos — SmartNails

> Projeto Integrador X4 · 2 de junho de 2026

---

## Mapa de Relacionamentos

```
Cliente → Agenda (1:N) → Agendamento
Servico → Compõe (1:N) → Agendamento
Horario → Define se o agendamento pode OU NÂO existir.
```

## Observações

O horário funciona como uma porteira, se o horário escolhido estiver disponível ela abre, mas se estiver ocupado ela fecha. Foque no calendário, bloqueio de horários, cada horário é único para um idCliente e idServiço.

---

*Salve este arquivo em `docs/RELACIONAMENTOS.md` no seu repositório GitHub.*
