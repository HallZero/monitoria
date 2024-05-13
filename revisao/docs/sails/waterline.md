---
title: Waterline - Banco de Dados
sidebar_position: 2
---

# Banco de Dados no Sails.js

## Como o Sails faz a implementação do banco de dados?

Waterline é uma camada de abstração de banco de dados no Sails.js que permite aos desenvolvedores trabalhar com diferentes sistemas de armazenamento de dados de forma consistente, independente do banco de dados subjacente. Isso significa que você pode facilmente alternar entre diferentes bancos de dados sem precisar mudar muito do seu código.

Com Waterline, você pode definir modelos (models) que representam entidades de dados no seu aplicativo, e o Sails.js se encarrega de mapear esses modelos para as tabelas correspondentes no banco de dados. Ele oferece suporte tanto a bancos de dados relacionais, como MySQL, PostgreSQL e SQLite, quanto a bancos de dados NoSQL, como MongoDB e Redis.

Para utilizar o Waterline no Sails.js, você precisa primeiro configurar a conexão com o banco de dados desejado no arquivo config/datastores.js. Em seguida, você define seus modelos no diretório api/models/, onde cada arquivo representa um modelo e define os atributos e as associações entre eles.

```javascript
// config/datastores.js
module.exports.datastores = {
  default: {
    adapter: 'sails-mysql',
    url: 'mysql://user:password@localhost:3306/database'
  }
};
```

Por exemplo, se você estiver desenvolvendo um aplicativo de blog, pode ter um modelo Post que representa os posts do blog, com atributos como title, content e author. Além disso, você pode ter um modelo User para representar os usuários do sistema, com atributos como username e email.

```javascript
// api/models/Post.js
module.exports = {
  attributes: {
    title: { type: 'string', required: true },
    content: { type: 'string', required: true },
    author: { model: 'User' }
    }
};
```

```javascript
// api/models/User.js
module.exports = {
  attributes: {
    username: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    posts: { collection : 'Post', via: 'author' }
};
```

Depois de definir seus modelos, você pode usar os métodos fornecidos pelo Waterline para realizar operações de criação, leitura, atualização e exclusão (CRUD) no banco de dados, sem se preocupar com os detalhes específicos do banco de dados subjacente.

No geral, o Sails.js e o Waterline tornam a utilização de bancos de dados em aplicativos web Node.js mais simples e flexível, permitindo que os desenvolvedores se concentrem na lógica de negócios do aplicativo em vez de lidar diretamente com a manipulação de dados e a interação com o banco de dados.