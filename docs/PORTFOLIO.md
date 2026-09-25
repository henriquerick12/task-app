# Task App — Projeto com Spec-Driven Development

## Visão geral

O Task App é uma aplicação web para criação e organização simples de tarefas pessoais.

O objetivo principal deste projeto não foi apenas desenvolver uma aplicação funcional, mas praticar um processo de desenvolvimento orientado por especificação utilizando **Spec-Driven Development (SDD)** e apoio de um **coding agent**.

Em vez de iniciar diretamente pelo código, o projeto passou primeiro por descoberta, definição de requisitos, especificação, decisões técnicas, arquitetura e planejamento.

**Aplicação:** https://task-app-rose-seven.vercel.app/

**Código-fonte:** https://github.com/henriquerick12/task-app

---

## O desafio

Um problema comum ao desenvolver software com agentes de IA é começar pela implementação antes de definir claramente:

- o que deve ser construído;
- quais regras o sistema precisa seguir;
- quais funcionalidades fazem parte do escopo;
- quais decisões técnicas foram tomadas;
- como saber se a implementação está correta.

Neste projeto, a proposta foi inverter esse processo.

Antes de permitir que o coding agent implementasse a aplicação, o comportamento esperado do sistema foi especificado e transformado em documentação executável como contexto para o desenvolvimento.

---

## Processo utilizado

O desenvolvimento seguiu o seguinte fluxo:

```text
Ideia
  ↓
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
Implementação com Coding Agent
  ↓
Testes E2E
  ↓
Validação
  ↓
Git / GitHub
  ↓
Deploy
```

O código começou somente depois da aprovação da especificação e do planejamento.

---

## Discovery

A ideia inicial foi refinada antes da implementação.

Durante essa etapa foram definidos pontos como:

- aplicação pessoal;
- criação e listagem de tarefas;
- funcionamento sem autenticação;
- persistência local no navegador;
- prevenção de tarefas duplicadas;
- limite de caracteres;
- ordenação das tarefas;
- comportamento em caso de erro;
- responsividade;
- escopo do MVP.

Isso permitiu separar decisões de produto das decisões de implementação.

---

## PRD

Os requisitos consolidados foram documentados em `PRD.md`.

O documento definiu:

- objetivo do produto;
- usuário;
- escopo do MVP;
- requisitos funcionais;
- regras de negócio;
- requisitos não funcionais;
- critérios de sucesso;
- funcionalidades fora do escopo.

Essa etapa definiu principalmente **o que o produto deveria fazer**.

---

## SPEC

Depois do PRD foi criada uma especificação mais precisa.

A SPEC transformou requisitos em comportamentos verificáveis, incluindo:

- modelo da tarefa;
- normalização do título;
- validação de campos;
- limite de 100 caracteres;
- comparação case-insensitive para duplicidade;
- persistência;
- ordenação;
- comportamento de sucesso;
- comportamento de erro;
- critérios de aceitação.

A SPEC passou a funcionar como contrato entre planejamento e implementação.

---

## Decisões técnicas

As principais escolhas técnicas foram registradas antes da implementação:

| Área | Decisão |
|---|---|
| Frontend | React + TypeScript |
| Build | Vite |
| Interface | Tailwind CSS |
| Persistência | localStorage |
| Testes | Playwright |
| Deploy | Vercel |

As decisões foram documentadas juntamente com contexto, alternativas, justificativas e consequências.

Isso tornou explícito **por que determinada solução foi escolhida**, e não apenas qual tecnologia foi utilizada.

---

## Arquitetura

A aplicação foi organizada separando responsabilidades entre interface, domínio e persistência.

```text
src/
├── components/
├── domain/
├── storage/
├── App.tsx
└── main.tsx
```

Fluxo conceitual:

```text
Interface
   ↓
Domínio
   ↓
Persistência
   ↓
localStorage
```

A camada de domínio concentra as regras relacionadas às tarefas.

A camada de persistência encapsula o acesso ao `localStorage`.

A interface fica responsável principalmente pela interação com o usuário e apresentação dos dados.

Essa separação reduz acoplamento e evita espalhar regras de negócio e persistência pelos componentes.

---

## Planejamento da implementação

Antes do coding agent começar a implementação, o trabalho foi dividido em um roadmap:

1. Setup
2. Domínio
3. Persistência
4. Interface funcional
5. Design e responsividade
6. Testes E2E
7. Validação
8. Deploy
9. Fechamento

Cada etapa foi posteriormente decomposta em tarefas menores dentro de `TASKS.md`.

Assim, o agente recebeu não apenas uma descrição genérica do aplicativo, mas um conjunto de especificações e tarefas previamente definidas.

---

## Desenvolvimento com Coding Agent

A implementação foi realizada com apoio de um coding agent.

O papel humano permaneceu concentrado em:

- definir o objetivo;
- tomar decisões de produto;
- aprovar requisitos;
- aprovar decisões técnicas;
- definir arquitetura;
- revisar o planejamento;
- acompanhar a implementação;
- validar os resultados.

O agente ficou responsável principalmente pela execução das tarefas de implementação.

Isso demonstrou na prática uma diferença importante:

```text
Prompt → código
```

não é o mesmo processo que:

```text
Especificação → planejamento → tarefas → agente → validação
```

O segundo modelo fornece mais contexto e critérios objetivos para avaliar o trabalho produzido pelo agente.

---

## Testes e validação

A aplicação utiliza Playwright para testes E2E.

Foram executados **10 testes automatizados**, cobrindo comportamentos importantes do MVP.

Entre os cenários testados estão:

- estado vazio;
- criação de tarefa;
- validação do título;
- limite de caracteres;
- prevenção de duplicidade;
- ordenação;
- persistência após recarregar a aplicação.

Além dos testes E2E, o projeto foi validado através de:

```bash
npm run lint
npm run build
npx playwright test
```

Lint, build e testes foram concluídos com sucesso antes do deploy.

---

## Deploy

Depois da validação local, o projeto foi versionado com Git, publicado no GitHub e implantado na Vercel.

A versão em produção também foi validada manualmente.

Aplicação publicada:

https://task-app-rose-seven.vercel.app/

---

## O que aprendi

Este projeto serviu como prática de **Spec-Driven Development aplicado ao desenvolvimento com agentes de IA**.

Os principais aprendizados foram:

### 1. Não começar pelo código

Uma ideia pode ser refinada antes da implementação.

Discovery e especificação reduzem decisões improvisadas durante o desenvolvimento.

### 2. Separar produto de implementação

PRD ajuda a definir o problema e os requisitos.

SPEC transforma esses requisitos em comportamentos mais precisos e verificáveis.

Decisões técnicas e arquitetura definem como o software será estruturado.

### 3. Trabalhar com critérios de aceitação

Uma implementação não deve ser considerada pronta apenas porque “parece funcionar”.

Critérios de aceitação permitem verificar objetivamente se o comportamento esperado foi implementado.

### 4. Planejar antes de delegar para agentes

Coding agents funcionam melhor quando recebem contexto estruturado.

Em vez de solicitar a construção completa do sistema através de um único prompt, o projeto pode fornecer:

```text
PRD
SPEC
DECISIONS
ARCHITECTURE
ROADMAP
TASKS
```

Esses documentos funcionam como contexto operacional para o agente.

### 5. Separar responsabilidades na arquitetura

Mesmo em uma aplicação pequena, separar interface, domínio e persistência facilita entendimento, manutenção e testes.

### 6. Testar o comportamento especificado

Os testes E2E conectam a implementação aos comportamentos definidos anteriormente.

O fluxo passa a ser:

```text
Requisito
   ↓
Critério de aceitação
   ↓
Implementação
   ↓
Teste
   ↓
Validação
```

### 7. Versionar por marcos

Git não foi tratado apenas como backup final.

A documentação, planejamento, implementação e fechamento puderam ser registrados como marcos distintos da evolução do projeto.

---

## Resultado

Ao final do projeto foi produzido um MVP:

- funcional;
- responsivo;
- persistente no navegador;
- testado;
- versionado;
- documentado;
- publicado em produção.

Mais importante que a complexidade da aplicação foi o processo utilizado para construí-la.

O projeto serviu como primeira aplicação prática de um fluxo em que **especificações orientam agentes de desenvolvimento**, preparando a base para processos mais avançados envolvendo contexto para agentes, skills, subagentes e pipelines agentic.