---
title: Banco de Dados na Arquitetura Cliente-Servidor
order: 3
---

# Banco de Dados na Arquitetura Cliente-Servidor

Na arquitetura cliente-servidor, o banco de dados desempenha um papel fundamental na gestão e armazenamento dos dados do sistema. Ele atua como o repositório central de informações, acessado e manipulado tanto pelo cliente quanto pelo servidor.

<center>
<img src={require('/img/Relational-database.png').default} width="80%" />
</center>

## Modelagem de Dados

A modelagem de dados é o processo de definir a estrutura e as relações dos dados armazenados no banco de dados. Isso envolve a criação de tabelas, definição de chaves primárias e estrangeiras, bem como estabelecimento de relações entre as entidades. Por exemplo, em um sistema de gerenciamento de biblioteca, pode-se ter tabelas para livros, autores e empréstimos, todas relacionadas de forma apropriada.

Assim como em uma biblioteca bem organizada, onde os livros são categorizados e armazenados de forma eficiente para facilitar o acesso dos clientes, um banco de dados na arquitetura cliente-servidor garante que os dados sejam estruturados e gerenciados de maneira apropriada, permitindo que o sistema atenda às necessidades dos usuários de forma eficaz.

## SQL (Structured Query Language)

O SQL é a linguagem padrão para realizar operações no banco de dados, como consultas, inserções, atualizações e exclusões de dados. Com o SQL, é possível extrair informações específicas, modificar registros e realizar análises complexas. Por exemplo, uma consulta SQL pode ser usada para recuperar todos os livros emprestados por um determinado usuário em uma biblioteca.



## Tipos de bancos de dados

### Banco de Dados Relacional

Um banco de dados relacional é um tipo de banco de dados que organiza os dados em tabelas com linhas e colunas, seguindo o modelo relacional. Cada tabela representa uma entidade ou relação específica e as colunas representam os atributos dessas entidades. As relações entre as tabelas são estabelecidas através de chaves primárias e estrangeiras.

    - Organização em Tabelas: Os dados são organizados de forma tabular, o que significa que são estruturados em linhas e colunas. Cada linha representa uma instância ou entrada de dados, enquanto as colunas representam os diferentes atributos ou características dessas instâncias.

    - Modelo Relacional: O modelo relacional é baseado na teoria das relações, desenvolvida por Edgar F. Codd. Ele define a estrutura dos dados e as relações entre eles de forma lógica e matemática.

    - Consulta com SQL: Para acessar e manipular os dados em um banco de dados relacional, utiliza-se a linguagem SQL (Structured Query Language). O SQL oferece uma série de comandos para realizar operações como seleção, inserção, atualização e exclusão de dados.

Um exemplo comum de banco de dados relacional é o MySQL. Ele organiza os dados em tabelas, seguindo o modelo relacional, e utiliza consultas SQL para acessar e manipular esses dados. Por exemplo, em um sistema de comércio eletrônico, o MySQL pode ser usado para armazenar informações de produtos, pedidos e clientes.

### Banco de Dados Não-Relacional (NoSQL)

Um banco de dados NoSQL, também conhecido como banco de dados não-relacional, é um tipo de banco de dados que adota um modelo de dados diferente dos bancos de dados relacionais tradicionais. Em vez de tabelas, eles podem usar diferentes modelos de dados, como documentos, grafos ou pares chave-valor.

    - Modelo de Dados Flexível: Os bancos de dados NoSQL são conhecidos por sua flexibilidade em lidar com dados não estruturados ou semiestruturados. Eles permitem que os desenvolvedores armazenem e manipulem dados de forma mais livre, sem a necessidade de seguir um esquema rígido.

    - Escalabilidade e Desempenho: Os bancos de dados NoSQL são frequentemente usados em casos de uso que exigem escalabilidade horizontal e alto desempenho. Eles são projetados para lidar com grandes volumes de dados e cargas de trabalho distribuídas.

Um exemplo de banco de dados NoSQL é o MongoDB. Ele adota um modelo de dados diferente dos bancos de dados relacionais, muitas vezes baseado em documentos ou grafos, e pode ser mais adequado para casos de uso com dados não estruturados ou semiestruturados. Por exemplo, em um sistema de análise de redes sociais, o MongoDB pode ser usado para armazenar perfis de usuários e suas conexões.

## Por que estamos utilizando um banco relacional neste projeto?

Os bancos de dados relacionais são amplamente utilizados em sistemas de informação devido à sua estrutura tabular e à capacidade de estabelecer relações entre as entidades. Eles são ideais para aplicações que requerem consistência, integridade e conformidade com um esquema de dados predefinido. Além disso, os bancos de dados relacionais oferecem suporte a consultas complexas, transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) e garantem a integridade dos dados. 

No caso do projeto atual, os dados são bem estruturados e podem ser representados de forma eficaz em tabelas relacionais. Além disso, a utilização de um banco de dados relacional como o MySQL ou o PostgreSQL permitem a implementação de consultas SQL para acessar e manipular os dados de forma eficiente. Como os donos de cães preencheram sempre o mesmo formulário, os dados são consistentes e podem ser armazenados em tabelas relacionais de forma organizada.

## Vídeo de referência da professora Kizzy Terra

<center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/P6uiLQ6F7Mo" title="O QUE É UM BANCO DE DADOS? | Computação para Curiosos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</center>

## Outros vídeos de referência

<center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/LU9XAOzpRNo" title="Bancos de Dados Relacional e Não Relacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</center>