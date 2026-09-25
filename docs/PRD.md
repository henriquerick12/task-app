# PRD — Aplicação Pessoal de Tarefas

## 1. Visão do produto

Aplicação web pessoal para gerenciamento simples de tarefas.

O usuário poderá cadastrar tarefas e visualizar as tarefas já cadastradas em uma única tela.

A aplicação será pública e poderá ser acessada por qualquer pessoa, porém cada visitante terá seus próprios dados armazenados localmente em seu navegador.

## 2. Objetivo

Permitir que uma pessoa registre e consulte rapidamente suas tarefas através de uma interface web simples, moderna e responsiva.

## 3. Usuário-alvo

Pessoa que deseja registrar uma lista simples de tarefas sem precisar criar uma conta ou realizar login.

## 4. Escopo do MVP

O MVP permitirá:

- criar uma tarefa;
- listar tarefas existentes;
- manter as tarefas salvas no navegador;
- acessar a aplicação sem autenticação;
- utilizar a aplicação em desktop e dispositivos móveis.

## 5. Requisitos funcionais

### RF-01 — Criar tarefa

O usuário deve poder informar o título de uma tarefa e adicioná-la à lista.

### RF-02 — Listar tarefas

O sistema deve exibir todas as tarefas cadastradas no navegador atual.

### RF-03 — Persistência local

As tarefas devem permanecer disponíveis após fechar ou recarregar a aplicação no mesmo navegador.

### RF-04 — Atualização após criação

Após uma tarefa ser criada com sucesso:

- ela deve aparecer imediatamente no topo da lista;
- o campo utilizado para inserir o título deve ser limpo.

### RF-05 — Estado vazio

Quando nenhuma tarefa estiver cadastrada, o sistema deve exibir:

> Nenhuma tarefa cadastrada.

### RF-06 — Tratamento de falha

Caso ocorra uma falha ao salvar uma tarefa, o sistema deve informar o erro ao usuário e preservar o título digitado.

## 6. Regras de negócio

### RN-01 — Título obrigatório

Uma tarefa não pode ser criada sem título.

### RN-02 — Título único

Não podem existir duas tarefas com o mesmo título no mesmo armazenamento do usuário.

### RN-03 — Limite do título

O título deve possuir no máximo 100 caracteres.

### RN-04 — Ordenação

As tarefas devem ser exibidas da mais nova para a mais antiga.

## 7. Dados conceituais

Cada tarefa precisa possuir informações suficientes para:

- identificar seu título;
- determinar quando foi criada;
- permitir sua ordenação.

Os detalhes técnicos desses dados serão definidos posteriormente na especificação e nas decisões técnicas.

## 8. Fluxo principal

1. O usuário acessa a aplicação.
2. O sistema carrega as tarefas armazenadas no navegador.
3. As tarefas existentes são exibidas da mais nova para a mais antiga.
4. O usuário informa o título de uma nova tarefa.
5. O usuário seleciona a ação de adicionar.
6. O sistema valida o título.
7. Se válido, a tarefa é armazenada.
8. A nova tarefa aparece no topo da lista.
9. O campo de entrada é limpo.

Caso a validação ou o armazenamento falhe, a tarefa não deve ser considerada criada e o usuário deve receber feedback adequado.

## 9. Requisitos não funcionais

### RNF-01 — Responsividade

A interface deve funcionar adequadamente em desktop e dispositivos móveis.

### RNF-02 — Compatibilidade

A aplicação deve oferecer suporte às versões modernas dos principais navegadores, incluindo Chrome, Edge, Firefox e Safari.

### RNF-03 — Experiência visual

A aplicação deve possuir aparência moderna, componentes visualmente consistentes e animações sutis, sem prejudicar a usabilidade.

### RNF-04 — Deploy

A aplicação deve poder ser publicada posteriormente na Vercel.

## 10. Persistência e privacidade

As tarefas pertencem ao navegador no qual foram cadastradas.

Não haverá conta de usuário nem sincronização entre dispositivos.

Um visitante não deve acessar as tarefas armazenadas no navegador de outro visitante.

## 11. Fora do escopo do MVP

Não fazem parte desta versão:

- editar tarefas;
- excluir tarefas;
- marcar tarefas como concluídas;
- autenticação;
- cadastro de usuários;
- sincronização entre dispositivos;
- sincronização automática entre abas;
- compartilhamento de tarefas entre usuários;
- banco de dados remoto.

## 12. Critérios de sucesso

O MVP será considerado funcional quando um usuário conseguir:

1. acessar a aplicação;
2. visualizar suas tarefas existentes;
3. adicionar uma tarefa válida;
4. visualizar imediatamente a nova tarefa;
5. recarregar a página e continuar vendo as tarefas cadastradas;
6. receber feedback quando tentar cadastrar uma tarefa inválida;
7. utilizar o fluxo principal tanto em desktop quanto em dispositivo móvel.