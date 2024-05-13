---
title: Arquitetura Cliente-Servidor
order: 2
---

# Arquitetura Cliente-Servidor

A arquitetura cliente-servidor é um modelo de arquitetura de software que divide um sistema em dois subsistemas principais: o cliente e o servidor. O cliente é a interface do usuário, enquanto o servidor é o responsável por armazenar e gerenciar os dados.

<img src={require('/img/client-server-architecture.png').default } width='100%' />
<sub>Arquitetura cliente servidor</sub>

## Vídeo de referência

<center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/yioOQ4ItYuo" title="Client Server Architecture | System Design Interview Basics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</center>

## O que é um cliente?

O cliente é a interface do usuário, que é responsável por enviar solicitações ao servidor e exibir as respostas ao usuário. O cliente pode ser um aplicativo de desktop, um aplicativo móvel ou um navegador da web. No caso do desenvolvimento web, o cliente é o browser. 

Um cliente pode ser comparado a um cliente em um restaurante. Assim como um cliente em um restaurante faz pedidos ao garçom e espera receber sua comida, um cliente em um sistema de computador faz solicitações ao servidor e espera receber as respostas adequadas. 

## O que é um servidor?

O servidor é o responsável por armazenar e gerenciar os dados do sistema. Ele recebe as solicitações do cliente, processa essas solicitações e envia as respostas de volta ao cliente. O servidor pode ser um servidor web, um servidor de banco de dados ou um servidor de aplicativos.

Um servidor pode ser comparado à cozinha de um restaurante. Assim como uma cozinha recebe os pedidos dos clientes, prepara os pratos solicitados e os envia para serem servidos nas mesas, um servidor recebe as solicitações dos clientes, processa essas solicitações e envia as respostas de volta aos clientes.

## Como funciona a comunicação entre cliente e servidor?

A comunicação entre cliente e servidor é feita por meio de um protocolo de comunicação, como o HTTP (Hypertext Transfer Protocol). O cliente envia uma solicitação ao servidor, que processa essa solicitação e envia uma resposta de volta ao cliente. A resposta pode ser uma página da web, um arquivo, um dado ou qualquer outra informação.
