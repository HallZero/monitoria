---
title: Helpers no Sails.js
order: 1
---

# O que são _helpers_?
Helpers são funções que podem ser chamadas em qualquer lugar do código, e que são úteis para tarefas repetitivas. Eles são definidos em arquivos na pasta `api/helpers/` e são carregados automaticamente pelo Sails.js.

Helpers são realmente convenientes, pois com eles, você pode executar ações, respostas personalizadas, scripts de linha de comando, testes unitários e outros helpers.

# Como criar um _helper_?

Para criar um _helper_, basta criar um arquivo na pasta `api/helpers/` com o nome do _helper_ que você deseja criar. Por exemplo, se você deseja criar um _helper_ chamado `formatDate`, crie um arquivo chamado `formatDate.js` na pasta `api/helpers/`, como no exemplo abaixo:

```javascript
// api/helpers/formatDate.js
module.exports = {
  friendlyName: 'Format date',
  description: 'Format a date to a specific format',
  inputs: {
    date: {
      type: 'string',
      required: true,
      description: 'The date to format',
    },
    format: {
      type: 'string',
      required: true,
      description: 'The format to use',
    },
  },
  exits: {
    success: {
      description: 'All done.',
    },
  },
  fn: async function (inputs, exits) {
    // Do something
    return exits.success();
  },
};
```

Vamos analisar o código acima:

- `friendlyName`: O nome amigável do _helper_.
- `description`: A descrição do _helper_.
- `inputs`: Os parâmetros de entrada do _helper_.
- `exits`: As saídas do _helper_.
- `fn`: A função que será executada pelo _helper_. Neste caso, a função é assíncrona e retorna sucesso.

### A função `fn`
A função `fn` é o coração do _helper_. Ela é responsável por executar a lógica do _helper_. No exemplo acima, a função `fn` é assíncrona, recebe dois argumentos. O trabalho de `fn` é utilizar e processar os argins fornecidos pela entrada e, em seguida, acionar um dos exits fornecidos para devolver o controle ao código que chamou o _helper_.

### Parâmetros de entrada
Os parâmetros de entrada são definidos na propriedade `inputs` do _helper_ e cada input é definido por, no mínimo, uma propriedade de `type`. No entanto, ao contrário dos parâmetros de função JavaScript padrão, as entradas são validadas automaticamente. Se um _helper_ for chamado com argumentos inválidos ou faltantes, o Sails.js lançará um erro.

Esses são os mesmos tipos de dados (e semântica relacionada) com os quais você pode estar acostumado ao definir atributos em `model`. Você pode fornecer um valor padrão para uma entrada definindo sua propriedade `defaultsTo`. Ou você pode torná-lo obrigatório definindo `_required: true_`. Você até pode usar `allowNull` e abstrações de validação como `isEmail`.

### Utilizando um _helper_
Para utilizar um _helper_, basta chamar a função `sails.helpers.nomeDoHelper()` em qualquer lugar do seu código. Por exemplo, se você deseja utilizar o _helper_ `formatDate` que criamos anteriormente, você pode fazer o seguinte:

```javascript
let formattedDate = await sails.helpers.formatDate.with({
  date: '2022-01-01',
  format: 'DD/MM/YYYY',
});
```