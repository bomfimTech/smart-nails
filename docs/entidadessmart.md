# Levantamento de Entidades — SmartNails

> Projeto Integrador X4 · 2 de junho de 2026

---

## Entidades

### Cliente
- id: number
- nome: string
- telefone: string
- email: string

### Servico
- id: number
- nome: string
- duracao: number
- preco: number

### Horario
- id: number
- diaSemana: string
- horaInicio: string
- horaFim: string

### Agendamento
- id: number
- data: Date
- hora: string
- clienteId: number
- servicoId: number
- status: string

## Observações

Ideal para profissionais autônomos. Foque no calendário e bloqueio de horários.

---

*Salve este arquivo em `docs/ENTIDADES.md` no seu repositório GitHub.*
