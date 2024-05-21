# Pokemon Deck Builder

## Descrição

A aplicação **Pokemon Deck Builder** permite aos jogadores criar, editar e gerenciar baralhos de cartas usando a API do Pokemon TCG. Desenvolvida em Angular 16+, Tailwind CSS e utilizando a biblioteca UI Infragistics, a aplicação fornece uma interface intuitiva para construção de baralhos com validação de regras específicas.

## Tecnologias Utilizadas

- **Angular 16+**
- **Tailwind CSS**
- **Ignite UI for Angular (Infragistics)**
- **Pokemon TCG API**

## Funcionalidades

### Lista de Baralhos

- **Visualizar Baralhos**: O usuário pode ver todos os seus baralhos.
- **Criar Novo Baralho**: O usuário pode criar um novo baralho.
- **Remover Baralho**: O usuário pode remover um baralho existente.
- **Editar Baralho**: O usuário pode editar um baralho existente.
- **Visualizar Detalhes**: O usuário pode clicar em um baralho para visualizar seus detalhes.

### Criação de um Baralho

- **Nome do Baralho**: O usuário pode nomear seu baralho.
- **Inserir Cartas**: O usuário pode adicionar cartas ao baralho.
- **Limite de Cartas**: O baralho deve ter no mínimo 24 e no máximo 60 cartas.
- **Validação de Cartas**: Apenas 4 cartas com o mesmo nome são permitidas no baralho.
- **Salvar Baralho**: Após salvar, o usuário é redirecionado para a lista de baralhos atualizada.
- **Armazenamento em Memória**: Os baralhos são salvos apenas em memória (localStorage).

### Detalhes do Baralho

- **Tipos de Cartas**: O usuário consegue ver quantos pokemons e cartas de treinador existem no baralho.
- **Cores do Baralho**: O usuário consegue ver de quantas cores (types únicos) é composto o baralho.

## Estrutura do Projeto

```markdown
pokemon-deck-builder/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── deck-form.component.ts
│   │   │   ├── deck-form.component.html
│   │   │   ├── deck-list.component.ts
│   │   │   ├── deck-list.component.html
│   │   ├── models/
│   │   │   ├── deck.model.ts
│   │   ├── services/
│   │   │   ├── pokemon.service.ts
│   ├── main.ts
│   ├── styles.css
├── tailwind.config.js
├── package.json
└── README.md