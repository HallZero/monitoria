---
title: Testes
sidebar_position: 5
---

# Testes

Quando falamos de testes, estamos nos referindo a uma prática muito comum no desenvolvimento de software, que consiste em **verificar se o código escrito está funcionando corretamente**.

<center>
<img src="https://i.pinimg.com/originals/b2/37/7d/b2377d0cff8e242297c8fc025cfdf8a9.gif" />
</center>

## Por que testar?

Os testes são fundamentais para garantir a qualidade do software, pois permitem **identificar e corrigir erros** antes que eles cheguem ao usuário final. Além disso, eles ajudam a **documentar o código e facilitar a manutenção**, pois permitem verificar se as alterações realizadas não afetaram o funcionamento do sistema.

## Testes no Sails.js

No Sails,js, temos uma pasta específica para arquivos de testes, que é a pasta `test`. Nela, podemos criar arquivos de testes para verificar o funcionamento das nossas APIs, serviços, modelos, entre outros. É uma boa prática criar um arquivo teste de entrada, `lifecycle.test.js` por exemplo, e a partir dele, criar os demais arquivos de testes. Vou apresentar abaixo alguns frameworks que são comumente utilizados para testes em JavaScript.  Neste módulo, estamos utilizando duas ferramentas para realizar os testes: **Mocha** e **Supertest**.

## Mocha

O Mocha é um framework de testes para JavaScript que permite a execução de testes de forma simples e eficiente. Ele é muito utilizado para testes de **unidade**, **integração** e **aceitação**. Ele facilta a construção de testes *AAA* (Arrange, Act, Assert), que consciste em **preparar o ambiente**, **executar a ação** e **verificar o resultado**. 

Particularmente, todos eles seguem a mesma estrutura de testes, que é composta por:

1. **Arrange**: Preparar o ambiente para o teste. Utilizamos o `before` para definir o que será executado antes dos testes e o `after` para definir o que será executado após os testes. Além disso, agrupamos os testes utilizando o `describe`.
2. **Act**: Executar a ação que será testada. Utilizamos o `it` para definir o teste em si.
3. **Assert**: Verificar o resultado do teste. Utilizamos o `assert` ou `expect` para verificar se o resultado é o esperado.

## Exemplo de teste

Abaixo, temos um exemplo de teste de unidade utilizando o Mocha. Neste exemplo, estamos testando a função `soma` do arquivo `calculadora.js`. Verifique que o escopo e sintaxe do teste são semelhantes aos testes de unidade com os quais vocês utilizaram no projeto de vocês.

```javascript
const assert = require('assert');
const calculadora = require('../../api/services/calculadora');
const Sails = require('sails');

before((done) => {
  Sails.lift({}, done);
});

after((done) => {
  Sails.lower(done);
});

describe('Testes de unidade', () => {
  it('Deve retornar 3 ao somar 1 + 2', () => {
    assert.strictEqual(calculadora.soma(1, 2), 3);
  });
});
```

Vamos com calma e entender o que está acontecendo neste teste, passo a passo:

1. A função `before` é executada antes dos testes e a função `after` é executada após os testes. Neste caso, estamos utilizando o Sails para levantar e desligar a aplicação antes e depois dos testes.
2. Importamos a biblioteca `assert` e o arquivo `calculadora.js`
3. Utilizamos a função `describe` para agrupar os testes em uma suíte de testes chamada `Testes de unidade`
4. Utilizamos a função `it` para definir um teste, que deve retornar 3 ao somar 1 + 2
5. Utilizamos a função `assert.strictEqual` para verificar se o resultado da soma de 1 + 2 é igual a 3
6. Caso o teste falhe, o Mocha irá exibir uma mensagem de erro indicando o motivo do falha

## Supertest

O Supertest é uma biblioteca que permite realizar requisições HTTP em testes de integração. Ele é muito utilizado para testar APIs RESTful, pois permite simular requisições HTTP de forma simples e eficiente.

## Exemplo de teste

Abaixo, temos um exemplo de teste de integração utilizando o Mocha e o Supertest. Neste exemplo, estamos testando a rota `/api/v1/usuarios` da nossa aplicação.

```javascript
const request = require('supertest');
const app = require('../../app');
const Sails = require('sails');

before((done) => {
  Sails.lift({}, done);
});

after((done) => {
  Sails.lower(done);
});

describe('Testes de integração', () => {
  it('Deve retornar status 200 ao acessar a rota /api/v1/usuarios', (done) => {
    request(app)
      .get('/api/v1/usuarios')
      .expect(200, done);
  });
});
```
Vamos com calma e entender o que está acontecendo neste teste, passo a passo:

1. A função `before` é executada antes dos testes e a função `after` é executada após os testes. Neste caso, estamos utilizando o Sails para levantar e desligar a aplicação antes e depois dos testes
2. Importamos a biblioteca `supertest` e a nossa aplicação `app`
3. Utilizamos a função `describe` para agrupar os testes em uma suíte de testes chamada `Testes de integração`
4. Utilizamos a função `it` para definir um teste, que deve retornar o status 200 ao acessar a rota `/api/v1/usuarios`
5. Utilizamos a função `request` para fazer uma requisição HTTP à nossa aplicação
6. Utilizamos a função `get` para fazer uma requisição do tipo GET à rota `/api/v1/usuarios`
7. Utilizamos a função `expect` para verificar se o status da resposta é 200


Neste teste, estamos verificando se a rota `/api/v1/usuarios` da nossa aplicação retorna o status 200. Caso o teste falhe, o Mocha irá exibir uma mensagem de erro indicando o motivo do falha.

## Sinon

O Sinon é uma biblioteca que permite a criação de **spies**, **stubs** e **mocks** em testes de JavaScript. Ele é muito utilizado para **espionar** funções, **substituir** funções e **simular** comportamentos em testes de unidade e integração.

## Exemplo de teste

Abaixo, temos um exemplo de teste de unidade utilizando o Mocha e o Sinon. Neste exemplo, estamos testando a função `soma` do arquivo `calculadora.js`, utilizando um **stub** para simular o comportamento da função `subtrai`.

```javascript
const assert = require('assert');
const sinon = require('sinon');
const calculadora = require('../../api/services/calculadora');
const Sails = require('sails');

before((done) => {
  Sails.lift({}, done);
});

after((done) => {
  Sails.lower(done);
});

describe('Testes de unidade', () => {
  it('Deve retornar 3 ao somar 1 + 2', () => {
    const subtraiStub = sinon.stub(calculadora, 'subtrai').returns(0);
    assert.strictEqual(calculadora.soma(1, 2), 3);
    subtraiStub.restore();
  });
});
```

Vamos com calma e entender o que está acontecendo neste teste, passo a passo:

1. A função `before` é executada antes dos testes e a função `after` é executada após os testes. Neste caso, estamos utilizando o Sails para levantar e desligar a aplicação antes e depois dos testes
2. Importamos a biblioteca `assert`, `sinon` e o arquivo `calculadora.js`
3. Utilizamos a função `describe` para agrupar os testes em uma suíte de testes chamada `Testes de unidade`
4. Utilizamos a função `it` para definir um teste, que deve retornar 3 ao somar 1 + 2
5. Utilizamos a função `sinon.stub` para criar um **stub** da função `subtrai` que retorna 0
   1. O **stub** é uma função simulada que substitui a função original
   2. Muitos de vocês estão utilizando esta função dentro de uma chamada de `mockAsync`. É importante entender o que sua função faz para passar os argumentos corretos.
6. Utilizamos a função `assert.strictEqual` para verificar se o resultado da soma de 1 + 2 é igual a 3

:::tip Dica
Observem que mesmo o código não sendo exatamente igual ao que vocês utilizaram no projeto, a lógica é a mesma. Vocês importam as bibliotecas necessárias, definem os testes utilizando as funções `describe` e `it`, e verificam o resultado utilizando a função `assert` ou `expect`.
:::