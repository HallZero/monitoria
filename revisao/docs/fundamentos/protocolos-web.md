---
title: Protocolos Web
order: 5
---

# Protocolos Web

## Protocolos Web na Arquitetura Cliente-Servidor

Na arquitetura cliente-servidor, os protocolos web desempenham um papel crucial na comunicação entre o cliente (geralmente um navegador da web) e o servidor. Eles definem as regras e os formatos para a troca de mensagens entre os dois componentes, permitindo que solicitações sejam feitas pelo cliente e respostas sejam retornadas pelo servidor.

Os protocolos web mais comuns são o HTTP (Hypertext Transfer Protocol) e o HTTPS (HTTP Secure). O HTTP é um protocolo de comunicação que permite a transferência de informações na web, enquanto o HTTPS é uma versão segura do HTTP que utiliza criptografia para proteger os dados transmitidos entre o cliente e o servidor.

Podemos citar também o WebSocket, um protocolo de comunicação bidirecional que permite a comunicação em tempo real entre o cliente e o servidor. Ele é amplamente utilizado em aplicações web que exigem interações em tempo real, como chats, jogos online e transmissões ao vivo.

## HTTP (Hypertext Transfer Protocol) \<- Nosso Foco

<img src={require("/img/http-protocol.png").default} width="100%"/>

O HTTP é o protocolo mais comum utilizado na web para comunicação entre clientes e servidores. Ele opera no topo do modelo de camadas TCP/IP e define métodos de requisição, como GET, POST, PUT e DELETE, que são usados para solicitar e enviar dados entre o cliente e o servidor. Por exemplo, quando um navegador solicita uma página da web a um servidor, ele envia uma requisição HTTP GET para obter os dados necessários.


### Relação com Sails.js

O framework Sails.js é amplamente utilizado para desenvolvimento de aplicativos web em Node.js e oferece suporte nativo ao protocolo HTTP. Ele utiliza o HTTP para gerenciar a comunicação entre o cliente e o servidor, roteando as solicitações HTTP recebidas para as rotas correspondentes definidas no aplicativo. Isso permite que os desenvolvedores construam APIs RESTful e aplicativos web dinâmicos de forma eficiente, aproveitando os recursos e convenções oferecidos pelo protocolo HTTP.

