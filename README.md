# Task App

Aplicação web pessoal para criação e gerenciamento simples de tarefas, desenvolvida como projeto prático de **Spec-Driven Development (SDD)**.

O projeto foi especificado e planejado antes da implementação, utilizando documentos de produto, especificação, decisões técnicas, arquitetura, roadmap e tarefas.

## Funcionalidades

- Criar tarefas
- Listar tarefas
- Persistir tarefas no navegador
- Impedir títulos vazios
- Limitar títulos a 100 caracteres
- Impedir títulos duplicados
- Ordenar tarefas da mais nova para a mais antiga
- Interface responsiva
- Feedback de validação e erros

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- localStorage
- Playwright
- ESLint

## Arquitetura

O projeto utiliza uma arquitetura simples com separação de responsabilidades:

```text id="v3j15s"
src/
├── components/   # Interface
├── domain/       # Modelo e regras de negócio
├── storage/      # Persistência
├── App.tsx
└── main.tsx

tests/
└── e2e/          # Testes Playwright
```

Fluxo principal:

```text id="mm2nyb"
Interface
    ↓
Domínio
    ↓
Persistência
    ↓
localStorage
```

## Spec-Driven Development

O projeto foi desenvolvido seguindo um fluxo orientado por especificação:

```text id="kxbnqj"
Discovery
   ↓
PRD
   ↓
SPEC
   ↓
Decisões Técnicas
   ↓
Arquitetura
   ↓
Roadmap
   ↓
Tasks
   ↓
Implementação
   ↓
Testes
   ↓
Validação
```

A implementação foi iniciada somente depois da definição e aprovação dos requisitos e do planejamento.

A documentação está disponível em [`docs/`](./docs):

- [`PRD.md`](./docs/PRD.md) — requisitos do produto
- [`SPEC.md`](./docs/SPEC.md) — especificação e critérios de aceitação
- [`DECISIONS.md`](./docs/DECISIONS.md) — decisões técnicas
- [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — arquitetura
- [`ROADMAP.md`](./docs/ROADMAP.md) — etapas de implementação
- [`TASKS.md`](./docs/TASKS.md) — unidades de trabalho e progresso

## Executando localmente

### Pré-requisitos

- Node.js
- npm

Clone o projeto:

```bash id="86g00x"
git clone https://github.com/henriquerick12/task-app.git
cd task-app
```

Instale as dependências:

```bash id="32bpt6"
npm install
```

Execute o ambiente de desenvolvimento:

```bash id="qx5z21"
npm run dev
```

## Build

```bash id="2y1n9b"
npm run build
```

## Lint

```bash id="ov9z0u"
npm run lint
```

## Testes

Os fluxos principais da aplicação são validados com testes E2E utilizando Playwright.

```bash id="hfsdrx"
npx playwright test
```

Os testes cobrem comportamentos como:

- estado vazio;
- criação de tarefas;
- validação de título;
- duplicidade;
- ordenação;
- persistência após recarregar a página.

## Persistência

As tarefas são armazenadas utilizando `localStorage`.

Por isso:

- não existe backend;
- não existe banco de dados remoto;
- não existe autenticação;
- os dados permanecem apenas no navegador do usuário;
- dispositivos diferentes não compartilham tarefas.

## Qualidade

Antes da entrega, o projeto é validado através de:

```bash id="ad4fnx"
npm run lint
npm run build
npx playwright test
```

## Deploy

Publicado na Vercel: [task-app-rose-seven.vercel.app](https://task-app-rose-seven.vercel.app/).

## Aprendizados

Este projeto foi utilizado para praticar:

- Spec-Driven Development;
- Discovery;
- definição de requisitos;
- PRD e SPEC;
- critérios de aceitação;
- decisões técnicas;
- arquitetura de software;
- planejamento através de Roadmap e Tasks;
- separação de responsabilidades;
- desenvolvimento orientado por especificação;
- testes E2E;
- validação antes da entrega;
- Git e versionamento por marcos.

## Status

**MVP implementado, testado e publicado em produção.**