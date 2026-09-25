# Decisões Técnicas — Task App

Este documento registra as principais decisões técnicas do projeto, suas justificativas e consequências.

---

## DT-001 — React + TypeScript + Vite

**Status:** Aprovada

### Contexto

O projeto precisa de uma aplicação web client-side, responsiva e preparada para deploy na Vercel.

### Decisão

Utilizar:

- React para construção da interface;
- TypeScript para tipagem estática;
- Vite como ferramenta de desenvolvimento e build.

### Alternativas consideradas

- HTML + CSS + TypeScript;
- Next.js + TypeScript.

### Justificativa

React oferece uma estrutura baseada em componentes adequada para a interface proposta.

TypeScript adiciona segurança de tipos e melhora a manutenção do código.

Vite fornece um ambiente simples e rápido para desenvolvimento e build de uma aplicação client-side.

### Consequências

O projeto dependerá do ecossistema React e de um processo de build antes do deploy.

---

## DT-002 — Persistência com localStorage

**Status:** Aprovada

### Contexto

O MVP precisa manter as tarefas após atualização ou reabertura da aplicação, mas não precisa compartilhar dados entre usuários ou dispositivos.

### Decisão

Persistir as tarefas utilizando `localStorage` do navegador.

### Alternativas consideradas

- banco de dados remoto;
- backend próprio;
- cookies;
- armazenamento apenas em memória.

### Justificativa

`localStorage` atende aos requisitos de persistência do MVP sem introduzir backend ou infraestrutura adicional.

### Consequências

Os dados:

- pertencem ao navegador atual;
- não são sincronizados entre dispositivos;
- podem ser removidos pelo usuário ao limpar os dados do navegador;
- não devem ser tratados como armazenamento seguro para informações sensíveis.

---

## DT-003 — Tailwind CSS

**Status:** Aprovada

### Contexto

A interface deve possuir aparência moderna e responsiva sem exigir uma arquitetura complexa de estilos.

### Decisão

Utilizar Tailwind CSS para estilização.

### Alternativas consideradas

- CSS puro;
- biblioteca completa de componentes.

### Justificativa

Tailwind permite construir rapidamente interfaces responsivas utilizando classes utilitárias e mantém a estilização próxima aos componentes.

### Consequências

A equipe precisa seguir as convenções do Tailwind e o projeto passa a depender dessa ferramenta para parte da camada visual.

---

## DT-004 — Playwright

**Status:** Aprovada

### Contexto

Os critérios de aceitação definidos na SPEC descrevem principalmente comportamentos observáveis pelo usuário.

### Decisão

Utilizar Playwright para testes automatizados end-to-end.

### Alternativas consideradas

- Vitest + React Testing Library;
- testes exclusivamente manuais;
- combinação de testes unitários, componentes e E2E.

### Justificativa

Playwright permite validar o fluxo real da aplicação no navegador e verificar os principais critérios de aceitação do MVP.

### Consequências

Os testes utilizarão um navegador automatizado e terão custo de execução maior que testes unitários.

Nesta versão do projeto, os testes E2E serão priorizados. Testes unitários poderão ser adicionados futuramente se a complexidade das regras aumentar.

---

## DT-005 — Deploy na Vercel

**Status:** Aprovada

### Contexto

O projeto deverá ser disponibilizado publicamente como projeto de portfólio.

### Decisão

Utilizar Vercel como plataforma de deploy.

### Justificativa

A aplicação será estática/client-side após o processo de build e não depende de infraestrutura de backend própria.

### Consequências

O projeto deve possuir processo de build compatível com o ambiente de deploy escolhido.

---

## Resumo da stack

```text id="8f4f6b"
React
  +
TypeScript
  +
Vite
  +
Tailwind CSS
  +
localStorage
  +
Playwright
  ↓
Vercel
```