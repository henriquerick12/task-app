# Arquitetura — Task App

## 1. Visão geral

O Task App será uma aplicação web client-side construída com React e TypeScript.

A aplicação não possuirá backend ou banco de dados remoto. Os dados serão armazenados no navegador através de `localStorage`.

A arquitetura prioriza simplicidade e separação de responsabilidades.

## 2. Estrutura planejada

```text id="rdd44v"
task-app/
├── docs/
│   ├── PRD.md
│   ├── SPEC.md
│   ├── DECISIONS.md
│   └── ARCHITECTURE.md
│
├── src/
│   ├── components/
│   ├── domain/
│   ├── storage/
│   ├── App.tsx
│   └── main.tsx
│
├── tests/
│   └── e2e/
│
└── README.md
```

A estrutura representa a organização lógica planejada. Arquivos adicionais de configuração poderão ser criados pelas ferramentas adotadas.

## 3. Camadas

### UI / Components

Responsável pela apresentação e interação com o usuário.

Exemplos de responsabilidades:

- campo de criação de tarefa;
- botão de adicionar;
- lista de tarefas;
- item individual;
- mensagens de erro;
- estado vazio.

Os componentes não devem acessar diretamente detalhes de persistência quando essa responsabilidade puder ser delegada à camada apropriada.

### Domain

Responsável pelo modelo e pelas regras relacionadas às tarefas.

Exemplos:

- definição do tipo `Task`;
- normalização do título;
- validação de título obrigatório;
- limite de 100 caracteres;
- verificação de duplicidade;
- criação dos dados necessários para uma nova tarefa.

As regras de negócio não devem depender da interface visual.

### Storage

Responsável pela comunicação com `localStorage`.

Responsabilidades:

- carregar tarefas;
- salvar tarefas;
- interpretar dados persistidos;
- lidar de forma segura com dados ausentes ou inválidos.

A chave utilizada para armazenamento deverá ser definida em um único local.

## 4. Fluxo de dados

```text id="lyefnm"
Usuário
   │
   ▼
Interface React
   │
   ▼
Regras de domínio
   │
   ▼
Camada de persistência
   │
   ▼
localStorage
```

Na inicialização:

```text id="ozx5mv"
localStorage
     ↓
storage
     ↓
tarefas
     ↓
estado da aplicação
     ↓
interface
```

Na criação:

```text id="qf6ve5"
Título digitado
     ↓
normalização
     ↓
validação
     ↓
criação da Task
     ↓
persistência
     ↓
atualização do estado
     ↓
interface
```

## 5. Modelo de domínio

```ts id="j2iyxl"
type Task = {
  id: string
  title: string
  createdAt: string
}
```

`createdAt` será armazenado em formato serializável e deverá permitir ordenação cronológica.

## 6. Persistência

A camada de armazenamento deverá fornecer operações equivalentes a:

```text id="86zcxr"
loadTasks()
saveTasks(tasks)
```

A interface não deve depender dos detalhes internos de serialização utilizados pelo armazenamento.

Caso os dados persistidos estejam ausentes ou inválidos, a aplicação deve retornar um estado seguro equivalente a uma lista vazia.

## 7. Estado da aplicação

O estado principal conterá a coleção atual de tarefas.

Após carregar a aplicação:

1. as tarefas são recuperadas;
2. o estado é inicializado;
3. a interface é renderizada.

Após uma criação válida:

1. a tarefa é criada;
2. a persistência é atualizada;
3. o estado da aplicação é atualizado;
4. a interface reflete a mudança.

## 8. Tratamento de erros

Erros de validação devem ser apresentados ao usuário sem alterar a lista de tarefas.

Falhas de persistência não devem:

- considerar a tarefa criada;
- limpar o campo digitado;
- quebrar a interface.

## 9. Testes

Os principais fluxos serão validados através de Playwright.

Os testes E2E deverão cobrir os critérios de aceitação definidos na SPEC, incluindo:

- estado vazio;
- criação de tarefa;
- título obrigatório;
- limite de caracteres;
- duplicidade;
- ordenação;
- persistência após reload.

## 10. Restrições arquiteturais

O MVP não deverá introduzir:

- backend;
- API própria;
- banco de dados remoto;
- autenticação;
- gerenciamento global de estado externo sem necessidade;
- abstrações que não sejam justificadas pelo escopo atual.

## 11. Princípios

A implementação deverá seguir:

- simplicidade;
- separação de responsabilidades;
- baixo acoplamento;
- código legível;
- implementação orientada pela SPEC;
- evitar complexidade sem necessidade.