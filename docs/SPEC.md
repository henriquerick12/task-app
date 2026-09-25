# SPEC — Aplicação Pessoal de Tarefas

## 1. Escopo

Implementar uma aplicação web client-side para criação e listagem de tarefas pessoais.

Os dados serão armazenados localmente no navegador e não haverá backend, autenticação ou banco de dados remoto no MVP.

## 2. Modelo de tarefa

Cada tarefa deve possuir:

```text
Task
├── id
├── title
└── createdAt
```

### `id`

Identificador único da tarefa.

### `title`

Título informado pelo usuário.

Regras:

- obrigatório;
- máximo de 100 caracteres;
- espaços no início e no final devem ser removidos;
- não pode resultar em string vazia após normalização.

### `createdAt`

Data e hora da criação da tarefa.

Deve permitir ordenar as tarefas cronologicamente.

## 3. Criação de tarefa

### Entrada

O usuário informa um título através do campo de criação.

### Validação

Antes de criar a tarefa:

1. remover espaços no início e no final;
2. verificar se o título resultante está vazio;
3. verificar se possui no máximo 100 caracteres;
4. verificar se já existe uma tarefa com o mesmo título.

A comparação de duplicidade deve ignorar diferenças entre letras maiúsculas e minúsculas.

Por exemplo, `Estudar Git`, `estudar git` e `ESTUDAR GIT` devem ser considerados o mesmo título.

### Sucesso

Quando a tarefa for válida:

1. gerar um identificador único;
2. registrar a data/hora da criação;
3. salvar a tarefa;
4. atualizar a lista imediatamente;
5. posicionar a nova tarefa no topo;
6. limpar o campo de entrada.

### Falha

Quando houver erro de validação ou persistência:

- a tarefa não deve ser criada;
- o usuário deve receber feedback;
- o texto digitado deve permanecer no campo.

## 4. Listagem

Ao iniciar a aplicação:

1. carregar as tarefas armazenadas;
2. ordenar por `createdAt`;
3. exibir da mais nova para a mais antiga.

Cada item deve apresentar pelo menos o título da tarefa.

## 5. Estado vazio

Quando nenhuma tarefa existir, apresentar:

> Nenhuma tarefa cadastrada.

O estado vazio deixa de ser exibido assim que a primeira tarefa for criada.

## 6. Persistência

As tarefas devem ser persistidas no navegador.

A persistência deve sobreviver a:

- atualização da página;
- fechamento da aba;
- fechamento e reabertura do navegador.

Os dados não precisam ser compartilhados entre:

- navegadores diferentes;
- dispositivos diferentes;
- usuários diferentes;
- abas abertas simultaneamente.

A sincronização automática entre abas não faz parte do MVP.

## 7. Interface

A aplicação será composta por uma única página contendo:

```text
┌─────────────────────────────┐
│        Lista de tarefas     │
│                             │
│ [ Digite uma tarefa... ]    │
│ [        Adicionar       ]  │
│                             │
│ ─────────────────────────── │
│                             │
│ Tarefa mais recente         │
│ Outra tarefa                │
│ ...                         │
└─────────────────────────────┘
```

O desenho acima representa apenas a estrutura funcional e não determina o design visual final.

## 8. Responsividade

A interface deve funcionar em:

- desktop;
- tablet;
- smartphone.

O conteúdo deve adaptar-se ao espaço disponível sem exigir rolagem horizontal no fluxo principal.

## 9. Experiência visual

A aplicação deve possuir:

- aparência moderna;
- hierarquia visual clara;
- componentes consistentes;
- feedback visual para interações;
- animações sutis quando apropriadas.

As animações não devem bloquear ou atrasar ações do usuário.

## 10. Compatibilidade

Suporte às versões modernas de:

- Chrome;
- Edge;
- Firefox;
- Safari.

## 11. Tratamento de armazenamento inválido

Caso os dados armazenados localmente estejam ausentes ou não possam ser interpretados como uma lista válida de tarefas, a aplicação deve continuar funcionando sem quebrar a interface.

O estado deve ser tratado como lista vazia.

## 12. Fora do escopo

O MVP não implementará:

- edição;
- exclusão;
- conclusão de tarefas;
- categorias;
- prioridades;
- datas limite;
- pesquisa;
- filtros;
- autenticação;
- backend;
- API;
- banco de dados remoto;
- sincronização entre dispositivos;
- sincronização automática entre abas.

## 13. Critérios de aceitação

### CA-01 — Criar tarefa válida

Dado um título válido, quando o usuário adicionar a tarefa, ela deve ser armazenada e aparecer imediatamente no topo da lista.

### CA-02 — Título vazio

Um título vazio ou composto apenas por espaços não deve criar uma tarefa.

### CA-03 — Limite

Um título com mais de 100 caracteres não deve criar uma tarefa.

### CA-04 — Duplicidade

Se existir `Estudar Git`, não deve ser possível cadastrar `estudar git`.

### CA-05 — Persistência

Após criar uma tarefa e recarregar a página, ela deve continuar disponível.

### CA-06 — Ordenação

Quando existirem várias tarefas, a mais recentemente criada deve aparecer primeiro.

### CA-07 — Estado vazio

Sem tarefas cadastradas, deve ser apresentada a mensagem:

> Nenhuma tarefa cadastrada.

### CA-08 — Falha

Uma falha durante a persistência não deve limpar o título digitado nem considerar a tarefa criada.

## 14. Definition of Done

O MVP estará de acordo com esta SPEC quando todos os critérios de aceitação definidos acima forem satisfeitos e o fluxo principal funcionar em desktop e mobile.