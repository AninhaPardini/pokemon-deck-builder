# Pokemon Deck Builder

A aplicação **Pokemon Deck Builder** permite aos jogadores criar, editar e gerenciar baralhos de cartas usando a API do [Pokemon TCG](https://docs.pokemontcg.io/#api_v1cards_list). Desenvolvida em Angular 16+, Tailwind CSS e utilizando a biblioteca UI Infragistics, a aplicação fornece uma interface intuitiva para construção de baralhos com validação de regras específicas.

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
```

## Configuração do Tailwind CSS

### 1. Instale Tailwind CSS:
  ``` 
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init 
  ```

### 2. Configure o arquivo tailwind.config.js:
  ``` module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

### 3. Adicione Tailwind no arquivo src/styles.css:
  ``` 
    @tailwind base;
    @tailwind components;
    @tailwind utilities; 
  ```

## Rotas

``/:`` Exibe a lista de baralhos.

``/create:`` Página para criar um novo baralho.

``/edit/:id:`` Página para editar um baralho existente.

``details/:id``Página de detalhes do deck.

## Contribuição

1. Fork o repositório
2. Crie uma branch para sua feature (git checkout -b feature/nome-da-feature)
3. Commit suas alterações (git commit -am 'Adicionar nova feature')
4. Push para a branch (git push origin feature/nome-da-feature)
5. Crie um novo Pull Request

## Licença

Distribuído sob a licença MIT. Veja LICENSE para mais informações.

## Contato

Seu Nome - @aninhapardini - anapardinisimoni@gmail.com

Link do Projeto: https://github.com/AninhaPardini/pokemon-deck-builder