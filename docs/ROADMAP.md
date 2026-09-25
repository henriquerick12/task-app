# Roadmap — Task App

## Objetivo

Organizar a implementação do MVP em etapas incrementais, mantendo rastreabilidade com a SPEC e permitindo validação progressiva.

---

## Etapa 1 — Setup do projeto

Preparar o ambiente de desenvolvimento.

### Entregas

- projeto React + TypeScript + Vite;
- Tailwind CSS configurado;
- estrutura inicial de diretórios;
- aplicação executando localmente;
- configuração inicial do Git preservada.

### Validação

A aplicação deve iniciar localmente sem erros.

---

## Etapa 2 — Domínio de tarefas

Implementar o modelo e as regras de negócio definidas na SPEC.

### Entregas

- tipo `Task`;
- normalização de título;
- validação de título obrigatório;
- validação do limite de 100 caracteres;
- verificação de duplicidade case-insensitive;
- criação de nova tarefa com `id` e `createdAt`.

### Validação

As regras do domínio devem corresponder aos critérios de aceitação relacionados à criação de tarefas.

---

## Etapa 3 — Persistência local

Implementar a camada responsável pelo `localStorage`.

### Entregas

- chave de armazenamento centralizada;
- carregamento das tarefas;
- salvamento das tarefas;
- tratamento de armazenamento ausente;
- tratamento de dados inválidos.

### Validação

Tarefas salvas devem permanecer disponíveis após recarregar a aplicação.

---

## Etapa 4 — Interface funcional

Construir o fluxo principal da aplicação.

### Entregas

- campo de título;
- ação de adicionar;
- listagem de tarefas;
- estado vazio;
- mensagens de validação e erro;
- atualização imediata após criação;
- limpeza do campo após sucesso.

### Validação

O usuário deve conseguir executar o fluxo principal definido no PRD e na SPEC.

---

## Etapa 5 — Interface visual e responsividade

Aplicar a experiência visual definida para o produto.

### Entregas

- layout moderno;
- estilização com Tailwind CSS;
- responsividade;
- estados visuais de interação;
- animações sutis quando apropriadas.

### Validação

O fluxo principal deve funcionar adequadamente em desktop e mobile.

---

## Etapa 6 — Testes E2E

Configurar Playwright e automatizar os principais critérios de aceitação.

### Cenários

- estado vazio;
- criação válida;
- título vazio;
- título acima do limite;
- duplicidade;
- ordenação;
- persistência após reload.

### Validação

Os testes E2E do MVP devem executar com sucesso.

---

## Etapa 7 — Validação final

Comparar a implementação com os documentos do projeto.

### Verificações

- requisitos do PRD;
- comportamentos da SPEC;
- decisões técnicas;
- arquitetura;
- critérios de aceitação;
- funcionamento em desktop e mobile;
- build de produção.

Qualquer divergência deve ser corrigida ou registrada como nova decisão antes da conclusão do MVP.

---

## Etapa 8 — Deploy

Preparar e publicar a aplicação na Vercel.

### Validação

A versão publicada deve executar o mesmo fluxo principal validado localmente.

---

## Etapa 9 — Encerramento da fase

Consolidar o projeto como material de aprendizado e portfólio.

### Entregas

- README final;
- documentação atualizada;
- histórico Git organizado;
- projeto publicado;
- material de portfólio;
- registro dos conceitos aprendidos durante a Fase 2 — SDD.