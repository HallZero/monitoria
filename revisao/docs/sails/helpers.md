---
title: Helpers no Sails.js
order: 2
---

# O que são _helpers_?
Helpers são funções que podem ser chamadas em qualquer lugar do código, e que são úteis para tarefas repetitivas. Eles são definidos em arquivos na pasta `api/helpers/` e são carregados automaticamente pelo Sails.js.

Helpers são realmente convenientes, pois com eles, você pode executar ações, respostas personalizadas, scripts de linha de comando, testes unitários e outros helpers.

## Vídeo guia do professor Afonso Brandão
<center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZnqUzHJ3bEM" title="Helpers no Sails" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</center>

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

### Exits
Os _exits_ são as saídas do _helper_. Eles são definidos na propriedade `exits` e todo _helper_ suporta as padrões `error` e `success`. No exemplo acima, temos apenas um _exit_ chamado `success`, que é a saída padrão de um _helper_ bem-sucedido. No entanto, você pode definir quantos _exits_ desejar, cada um com sua própria descrição.

- *Caso de sucesso*: Ao chamar um auxiliar, se sua fn acionar `success`, ele retornará normalmente.
- *Caso de erro*: Se sua `fn` acionar algum _exit_ diferente de `success`, então lançará um Erro (a menos que `.tolerate()` tenha sido usado).
- *Caso de erro personalizado*: Quando necessário, você também pode expor outros exits personalizados (conhecidos como "exceptions"), permitindo que o código do usuário que chama o _handler_ lide com casos específicos e excepcionais.

### _Helpers_  síncronos
Se você não precisar de nada assíncrono, você pode simplesmente utilizar sem as palavras `async` e `await` e retornar um valor diretamente de `fn` e o Sails.js lidará com isso, utilizando a propriedade `sync: true`. Por exemplo:

### Acessando `req` em um _helper_
Se você precisar acessar o objeto `req` em um _helper_, você pode passá-lo como um argumento. A maneira mais simples de permitir que o código em sua ação passe `req` para seu _helper_ é definir um tipo de entrada: `ref`. Por exemplo:

```javascript
inputs: {

  req: {
    type: 'ref',
    description: 'The current incoming request (req).',
    required: true
  }

}
```

E para utilizá-lo, um exemplo seria:

```javascript
const headers = await sails.helpers.parseMyHeaders(req);
```

### Gerando _helpers_ automaticamente
Se você deseja gerar _helpers_ automaticamente, você pode usar o comando `sails generate helper <nome-do-helper>`. Isso criará um arquivo _helper_ em `api/helpers/<nome-do-helper>.js` que pode ser acessado em qualquer lugar do seu código como `sails.helpers.<nome-do-helper>`. Isso criará o arquivo _helper_ com um esqueleto básico, que você pode preencher com a lógica necessária.

### Conclusão
Os _helpers_ são uma parte essencial do Sails.js e são extremamente úteis para tarefas repetitivas e comuns. Eles permitem que você encapsule a lógica de negócios em funções reutilizáveis e modulares, tornando seu código mais limpo e fácil de manter. Com a capacidade de definir parâmetros de entrada, saídas e exceções, os _helpers_ são uma ferramenta poderosa para qualquer desenvolvedor Sails.js.

### Referências
- [Documentação oficial do Sails.js - Helpers](https://sailsjs.com/documentation/concepts/helpers)