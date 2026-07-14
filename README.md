# 📅 SmartNails

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white) ![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-14B8A6?style=flat-square) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)

> O SmartNails é uma plataforma de agendamento desenvolvida para profissionais autônomos que precisam organizar clientes, serviços e horários em um único lugar. Ideal para barbeiros, manicures, esteticistas, podólogos e outros prestadores de serviços, o sistema oferece uma experiência simples e eficiente para gerenciamento da rotina profissional.

## 🌐 Demonstração

_Link do deploy será adicionado após publicação na Vercel._

## 📸 Screenshots

_Adicione capturas de tela da aplicação aqui._


## ✨ Funcionalidades

- Cadastrar Clientes
- Visualizar Clientes
- Atualizar Cliente
- Excluir Cliente
- Cadastrar Serviço
- Listar Serviços
- Excluir Serviços
- Mostrar Agenda
- Definir Horários

## 📦 Módulos

- `clientes/` — módulo de clientes
- `agenda/` — módulo de agenda
- `servicos/` — módulo de servicos
- `horarios/` — módulo de horarios

## 🛠 Stack Tecnológica

| Tecnologia | Versão | Papel |
|---|---|---|
| Next.js | 16 | Framework full-stack |
| React | 19 | Interface de usuário |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 4 | Estilização |
| Drizzle ORM | latest | Acesso ao banco |
| SQLite | 3 | Persistência de dados |

## 📚 Conceitos Aplicados

- Agendamentos
- Calendários
- Dashboard

## 💰 Potencial Comercial

Plano mensal por profissional

## 🏗 Arquitetura X4

```
src/
├── app/              # Rotas e páginas
├── components/       # Componentes UI
├── hooks/            # Hooks customizados
├── modules/          # DTOs, Use Cases, Handlers
├── infrastructure/   # Schemas, Repositories, DB
└── shared/           # Types e utilitários
```

**Fluxo:** Frontend → Hook → Handler → DTO → Use Case → Repository → SQLite

## 🚀 Como Executar

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/seu-projeto.git
cd smartnails

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📋 Informações do Projeto

| Item | Detalhe |
|---|---|
| **Projeto** | SmartNails |
| **Nível** | Iniciante |
| **Mercado** | Barbeiros, Estéticas, Manicures, Podólogos |
| **Tempo estimado** | 4-6 semanas |
| **Arquitetura** | X4 |

## 👤 Autor

**João Gabriel Gomes dos S. Bomfim & Maria Vitória Teodorio Barbosa Bomfim**

---

<p align="center">Desenvolvido como parte do <strong>Projeto Integrador X4</strong></p>