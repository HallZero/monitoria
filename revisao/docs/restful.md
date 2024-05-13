---
title: RESTful
order: 5
---

# Princípios RESTful

O REST (Representational State Transfer) é um estilo arquitetural que define um conjunto de princípios e práticas para projetar sistemas de software que são escaláveis, flexíveis e fáceis de manter. Ele foi introduzido por Roy Fielding em sua dissertação de doutorado em 2000 e desde então tem sido amplamente adotado no desenvolvimento de serviços web e APIs.

<!-- <center>
<img src={require('/img/restful_architecture.png').default} width="80%" />
</center> -->

## Princípios RESTful

Os princípios fundamentais do RESTful incluem:

    - Arquitetura Cliente-Servidor: O cliente e o servidor são separados e independentes um do outro, o que permite que eles evoluam e sejam modificados de forma independente.

    - Estado Representacional: Os recursos do sistema são representados de forma única e uniforme por meio de URIs (Uniform Resource Identifiers) e manipulados por meio de métodos HTTP padronizados, como GET, POST, PUT e DELETE.

    - Comunicação Sem Estado: Cada solicitação do cliente para o servidor deve conter todas as informações necessárias para compreender e processar a solicitação, sem depender do contexto de sessão armazenado no servidor. Isso permite que as solicitações sejam tratadas de forma independente e escalável.
  
    - Interface Uniforme: O sistema expõe uma interface uniforme para interação com os recursos, o que simplifica o desenvolvimento, a manutenção e o uso de APIs. Essa interface consiste em recursos bem definidos, métodos HTTP padronizados, representações dos recursos em formatos como JSON ou XML e links para relacionamentos entre recursos.

    - Sistema em Camadas: O sistema é organizado em camadas hierárquicas, com cada camada responsável por uma função específica. Isso permite que o sistema seja escalável, flexível e modular, com a capacidade de adicionar ou remover camadas conforme necessário.


## Vantagens do RESTful

    - Simplicidade: O RESTful utiliza os métodos HTTP padronizados e os conceitos de recursos e URIs, tornando-o fácil de entender e implementar.

    - Escalabilidade: A abordagem sem estado do RESTful permite que os sistemas sejam facilmente escaláveis, já que cada solicitação é independente e autocontida.

    - Flexibilidade: Os serviços web RESTful são flexíveis e podem ser acessados por uma variedade de clientes, incluindo navegadores da web, aplicativos móveis e dispositivos IoT.

    - Desempenho: A utilização eficiente dos métodos HTTP e a minimização do overhead de comunicação tornam os serviços web RESTful altamente eficientes em termos de desempenho e largura de banda.

Assim, o RESTful é uma escolha popular para o desenvolvimento de APIs web em Sails.js, pois oferece uma maneira simples e eficaz de criar serviços web escaláveis, flexíveis e de alto desempenho.

## Relação com Sails.js

O framework Sails.js é conhecido por sua adesão aos princípios RESTful, facilitando a criação de APIs web RESTful de forma simples e intuitiva. Ele fornece um conjunto de convenções e funcionalidades que permitem aos desenvolvedores definir rotas, controladores e modelos de forma estruturada e coesa, seguindo as melhores práticas do REST.

Por exemplo, ao criar um recurso como User em um aplicativo Sails.js, os desenvolvedores podem definir rotas RESTful padrão, como GET para recuperar usuários, POST para criar novos usuários, PUT para atualizar usuários existentes e DELETE para remover usuários. Além disso, o Sails.js oferece suporte para serialização automática de dados em diferentes formatos, como JSON ou XML, facilitando a comunicação entre o cliente e o servidor.
