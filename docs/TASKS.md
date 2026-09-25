# Tasks — Task App

## Convenções

Status:

- `[ ]` pendente
- `[~]` em andamento
- `[x]` concluída

Uma tarefa só deve ser marcada como concluída após sua validação.

---

# Etapa 1 — Setup

## TASK-001 — Criar aplicação

- [x] Criar projeto React + TypeScript com Vite.
- [x] Confirmar execução local.
- [x] Confirmar build de produção.

**Concluída quando:** aplicação inicia e gera build sem erros.

---

## TASK-002 — Configurar Tailwind CSS

- [x] Instalar dependências necessárias.
- [x] Configurar Tailwind.
- [x] Confirmar aplicação dos estilos.

**Concluída quando:** uma classe Tailwind puder ser utilizada na interface.

---

## TASK-003 — Criar estrutura inicial

Criar:

```text id="v8a7dt"
src/
├── components/
├── domain/
└── storage/

tests/
└── e2e/
```

- [x] Estrutura criada conforme `ARCHITECTURE.md`.

**Concluída quando:** estrutura estiver alinhada ao `ARCHITECTURE.md`.

---

# Etapa 2 — Domínio

## TASK-004 — Definir Task

Criar o modelo:

```ts id="c4vny3"
type Task = {
  id: string
  title: string
  createdAt: string
}
```

**Referência:** SPEC §2.

- [x] Modelo `Task` definido com `id`, `title` e `createdAt`.

---

## TASK-005 — Implementar normalização

Implementar normalização do título:

- remover espaços no início;
- remover espaços no final.

**Referência:** SPEC §2 e §3.

- [x] Título normalizado removendo espaços das extremidades.

---

## TASK-006 — Implementar validações

Validar:

- título obrigatório;
- máximo de 100 caracteres;
- duplicidade case-insensitive.

**Referência:** CA-02, CA-03 e CA-04.

- [x] Título obrigatório, limite e duplicidade case-insensitive validados.

---

## TASK-007 — Implementar criação de Task

A criação deve gerar:

- `id`;
- título normalizado;
- `createdAt`.

**Referência:** SPEC §3.

- [x] Criação gera `id`, título normalizado e `createdAt` válido.

---

# Etapa 3 — Persistência

## TASK-008 — Implementar carregamento

Criar operação equivalente a:

```text id="i1b66s"
loadTasks()
```

Deve:

- acessar `localStorage`;
- interpretar os dados;
- retornar tarefas;
- retornar lista vazia quando necessário.

- [x] `loadTasks()` lê e interpreta tarefas persistidas.

---

## TASK-009 — Implementar salvamento

Criar operação equivalente a:

```text id="y5r0xa"
saveTasks(tasks)
```

Deve persistir a coleção atual.

**Referência:** CA-05.

- [x] `saveTasks()` persiste a coleção serializada.

---

## TASK-010 — Tratar dados inválidos

Dados inválidos no armazenamento não devem quebrar a aplicação.

**Referência:** SPEC §11.

- [x] Dados malformados e falhas de leitura retornam lista vazia.

---

# Etapa 4 — Interface funcional

## TASK-011 — Criar formulário

Implementar:

- campo de título;
- botão Adicionar;
- controle do valor digitado.

- [x] Formulário controlado com campo de título e ação Adicionar.

---

## TASK-012 — Integrar criação

Ao adicionar:

1. normalizar;
2. validar;
3. criar Task;
4. persistir;
5. atualizar estado;
6. limpar campo.

Em caso de erro, preservar o título digitado.

- [x] Fluxo de criação integrado; campo limpa somente após persistência bem-sucedida.

---

## TASK-013 — Criar lista

Exibir tarefas da mais nova para a mais antiga.

**Referência:** CA-06.

- [x] Tarefas ordenadas da mais nova para a mais antiga.

---

## TASK-014 — Implementar estado vazio

Sem tarefas, apresentar:

> Nenhuma tarefa cadastrada.

**Referência:** CA-07.

- [x] Estado vazio exibe a mensagem especificada.

---

## TASK-015 — Implementar feedback de erro

Apresentar mensagens adequadas para:

- título vazio;
- título acima do limite;
- duplicidade;
- falha de persistência.

- [x] Feedback implementado para os quatro erros definidos.

---

# Etapa 5 — Interface visual

## TASK-016 — Aplicar design

- [x] Design visual aplicado e compilado com Tailwind CSS.

Implementar aparência moderna utilizando Tailwind CSS.

---

## TASK-017 — Implementar responsividade

Validar interface em:

- desktop;
- tablet;
- smartphone.

- [x] Layout responsivo aprovado no Playwright em 1440, 768 e 390 px.

---

## TASK-018 — Adicionar feedback visual

- [x] Animação e feedback de erro aprovados no Playwright.

Implementar estados visuais e animações sutis quando apropriadas.

---

# Etapa 6 — Testes E2E

## TASK-019 — Configurar Playwright

- [x] Playwright, Chromium e script `test:e2e` configurados.

Instalar e configurar ambiente E2E.

---

## TASK-020 — Testar estado vazio

- [x] CA-07 automatizado e aprovado no Playwright.

Automatizar CA-07.

---

## TASK-021 — Testar criação

- [x] CA-01 automatizado e aprovado no Playwright.

Automatizar CA-01.

---

## TASK-022 — Testar validações

- [x] CA-02, CA-03 e CA-04 automatizados e aprovados no Playwright.

Automatizar:

- CA-02;
- CA-03;
- CA-04.

---

## TASK-023 — Testar ordenação

- [x] CA-06 automatizado e aprovado no Playwright.

Automatizar CA-06.

---

## TASK-024 — Testar persistência

- [x] CA-05 automatizado e aprovado no Playwright.

Criar tarefa, recarregar a página e verificar sua permanência.

**Referência:** CA-05.

---

# Etapa 7 — Validação

## TASK-025 — Executar testes

- [x] Suíte E2E completa: 10 testes aprovados.

Executar toda a suíte E2E e corrigir falhas.

---

## TASK-026 — Executar build

- [x] Build de produção concluído sem erros.

Gerar build de produção e verificar erros.

---

## TASK-027 — Revisar conformidade

- [x] PRD, SPEC, DECISIONS e ARCHITECTURE revisados; CA-08 também automatizado.

Comparar implementação com:

- PRD;
- SPEC;
- DECISIONS;
- ARCHITECTURE.

Registrar ou corrigir divergências.

---

# Etapa 8 — Deploy

## TASK-028 — Publicar na Vercel

Realizar deploy da versão validada.

---

## TASK-029 — Validar produção

Executar manualmente o fluxo principal na versão publicada.

---

# Etapa 9 — Encerramento

## TASK-030 — Finalizar README

Documentar:

- projeto;
- stack;
- arquitetura;
- instalação;
- execução;
- testes;
- link de produção.

---

## TASK-031 — Criar case de portfólio

Registrar:

- problema;
- processo SDD;
- decisões;
- arquitetura;
- implementação;
- testes;
- resultado;
- aprendizados.

---

## TASK-032 — Revisar Git

Garantir que os marcos relevantes do desenvolvimento estejam corretamente versionados.