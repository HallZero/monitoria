---
title: Configurações e variáveis de ambiente no Sails.js
sidebar_position: 4
---

# Configurações no Sails.js

Embora o Sails siga a filosofia da convenção sobre a configuração, é importante entender como personalizar esses padrões úteis de tempos em tempos. Para quase todas as convenções no Sails, há um conjunto de opções de configuração que permitem ajustar ou substituir coisas para atender às suas necessidades.

O sails possui muitos modos de ser configurado, porém focaremos aqui em fazer configurações modificando os arquivos localizados em `config/`.

<center>
<iframe src="https://giphy.com/embed/6vj5quVNRhoQw" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
</center>

## A pasta config/

Vários arquivos de configuração são gerados em novos aplicativos Sails por padrão. Esses arquivos padronizados incluem vários comentários embutidos, que são projetados para fornecer uma referência rápida e instantânea.

Esta pasta contém várias configurações específicas do ambiente, como chaves de API ou senhas de bancos de dados remotos. Dependendo do ambiente em que o Sails está instalado, o arquivo de configuração apropriado nesta pasta será carregado.

No seu projeto Sails, você pode encontrar os seguintes arquivos de configuração:

```bash
config/
├── blueprints.js
├── bootstrap.js
├── custom.js
├── datastores.js
├── env
│   └── production.js
├── globals.js
├── http.js
├── i18n.js
├── locales
│   ├── de.json
│   ├── en.json
│   ├── es.json
│   └── fr.json
├── local.js
├── log.js
├── models.js
├── policies.js
├── routes.js
├── security.js
├── session.js
├── sockets.js
└── views.js
```

Na maioria dos casos, as chaves de nível superior no objeto `sails.config` (por exemplo, `sails.config.views`) correspondem a um arquivo de configuração específico (por exemplo, config/views.js) em seu aplicativo; no entanto, as definições de configuração podem ser organizadas como você quiser nos arquivos em seu diretório config/.


## Variáveis de ambiente

Variáveis de ambiente são uma maneira de passar informações para o seu aplicativo que podem variar dependendo do ambiente em que ele está sendo executado. Por exemplo, você pode ter uma variável de ambiente chamada `DATABASE_URL` que contém a URL de conexão para o banco de dados que seu aplicativo deve usar.

Nesse contexto, o Sails.js já possui uma estrutura de organização de variáveis de ambiente, que são os arquivos na pasta `config/`. Para este exemplo do banco de dados, você pode configurar o arquivo `config/datastores.js` para que ele leia a variável de ambiente `DATABASE_URL` e use-a para se conectar ao banco de dados.


```javascript
  module.exports.datastores = {
    default: {
      url: process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/dbname'
    }
  };
```

Configurações especificados nestes arquivos geralmente estarão disponíveis em todos os ambientes (e.g. desenvolvimento, produção, teste, etc.). Se desejar que algumas configurações tenham efeito apenas em determinados ambientes, você pode usar os arquivos e pastas especiais específicos do ambiente:

    - Quaisquer arquivos salvos na pasta `/config/env/<nome-do-ambiente>` serão carregados somente quando o Sails for lançado no ambiente `<nome-do-ambiente>`. Por exemplo, arquivos salvos em config/env/production só serão carregados quando o Sails estiver em modo de produção.

    :::tip
    
    Enquanto estamos construindo o projeto, estamos no ambiente de desenvolvimento, então recomendo que as configurações carregadas são as do arquivo `config/env/development.js`.
    
    :::

Lembrando que este material é apenas de apoio. Recomendo fazer a leitura da documentação original no [guia oficial do Sails.js](https://sailsjs.com/documentation/concepts/configuration).
    
