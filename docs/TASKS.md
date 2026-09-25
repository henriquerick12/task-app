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

- [ ] Criar projeto React + TypeScript com Vite.
- [ ] Confirmar execução local.
- [ ] Confirmar build de produção.

**Concluída quando:** aplicação inicia e gera build sem erros.

---

## TASK-002 — Configurar Tailwind CSS

- [ ] Instalar dependências necessárias.
- [ ] Configurar Tailwind.
- [ ] Confirmar aplicação dos estilos.

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

---

## TASK-005 — Implementar normalização

Implementar normalização do título:

- remover espaços no início;
- remover espaços no final.

**Referência:** SPEC §2 e §3.

---

## TASK-006 — Implementar validações

Validar:

- título obrigatório;
- máximo de 100 caracteres;
- duplicidade case-insensitive.

**Referência:** CA-02, CA-03 e CA-04.

---

## TASK-007 — Implementar criação de Task

A criação deve gerar:

- `id`;
- título normalizado;
- `createdAt`.

**Referência:** SPEC §3.

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

---

## TASK-009 — Implementar salvamento

Criar operação equivalente a:

```text id="y5r0xa"
saveTasks(tasks)
```

Deve persistir a coleção atual.

**Referência:** CA-05.

---

## TASK-010 — Tratar dados inválidos

Dados inválidos no armazenamento não devem quebrar a aplicação.

**Referência:** SPEC §11.

---

# Etapa 4 — Interface funcional

## TASK-011 — Criar formulário

Implementar:

- campo de título;
- botão Adicionar;
- controle do valor digitado.

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

---

## TASK-013 — Criar lista

Exibir tarefas da mais nova para a mais antiga.

**Referência:** CA-06.

---

## TASK-014 — Implementar estado vazio

Sem tarefas, apresentar:

> Nenhuma tarefa cadastrada.

**Referência:** CA-07.

---

## TASK-015 — Implementar feedback de erro

Apresentar mensagens adequadas para:

- título vazio;
- título acima do limite;
- duplicidade;
- falha de persistência.

---

# Etapa 5 — Interface visual

## TASK-016 — Aplicar design

Implementar aparência moderna utilizando Tailwind CSS.

---

## TASK-017 — Implementar responsividade

Validar interface em:

- desktop;
- tablet;
- smartphone.

---

## TASK-018 — Adicionar feedback visual

Implementar estados visuais e animações sutis quando apropriadas.

---

# Etapa 6 — Testes E2E

## TASK-019 — Configurar Playwright

Instalar e configurar ambiente E2E.

---

## TASK-020 — Testar estado vazio

Automatizar CA-07.

---

## TASK-021 — Testar criação

Automatizar CA-01.

---

## TASK-022 — Testar validações

Automatizar:

- CA-02;
- CA-03;
- CA-04.

---

## TASK-023 — Testar ordenação

Automatizar CA-06.

---

## TASK-024 — Testar persistência

Criar tarefa, recarregar a página e verificar sua permanência.

**Referência:** CA-05.

---

# Etapa 7 — Validação

## TASK-025 — Executar testes

Executar toda a suíte E2E e corrigir falhas.

---

## TASK-026 — Executar build

Gerar build de produção e verificar erros.

---

## TASK-027 — Revisar conformidade

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