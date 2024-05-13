---
title: MVC (Model-View-Controller)
order: 4
---

# MVC (Model-View-Controller)

A arquitetura MVC é um padrão de design de software que divide um aplicativo em três componentes interconectados: Model (Modelo), View (Visão) e Controller (Controlador). Essa divisão facilita a manutenção, escalabilidade e reutilização do código, além de promover uma separação clara das responsabilidades.

<img src={require('/img/mvc.png').default} width='100%' />

## Modelo (Model)

O Model é a parte do sistema que lida com a lógica de negócio e a manipulação dos dados. Ele representa as regras de negócio e a estrutura dos dados que são utilizados pelo aplicativo.

- Exemplo: No contexto de um sistema de gerenciamento de tarefas, o modelo pode incluir classes que representam tarefas, usuários e projetos, juntamente com métodos para manipular esses dados, como criar, atualizar, ler e excluir tarefas.

## Visão (View)

A View é responsável por apresentar os dados ao usuário final de forma visualmente atraente e interativa. Ela representa a interface com a qual o usuário interage e exibe as informações de maneira compreensível.

- Exemplo: Na mesma aplicação de gerenciamento de tarefas, a visão pode ser uma página da web ou uma interface gráfica que permite aos usuários visualizar, adicionar, editar e excluir tarefas.

## Controlador (Controller)

O Controller atua como intermediário entre o Model e a View, gerenciando a interação do usuário e coordenando as operações entre esses dois componentes. Ele recebe as solicitações do usuário, executa as operações necessárias no modelo e atualiza a visão conforme necessário.

- Exemplo: No aplicativo de gerenciamento de tarefas, o controlador recebe as solicitações do usuário, como adicionar uma nova tarefa ou editar uma existente, manipula essas solicitações utilizando métodos do modelo correspondentes e atualiza a visão para refletir as mudanças.

## Vantagens da Arquitetura MVC

    - Separação de Responsabilidades: A divisão clara das responsabilidades entre o modelo, a visão e o controlador torna o código mais organizado, legível e fácil de manter.

    - Reutilização de Código: A modularidade proporcionada pela arquitetura MVC facilita a reutilização de componentes em diferentes partes do aplicativo.

    - Escalabilidade: A separação das camadas permite que cada uma delas seja escalada independentemente, tornando o aplicativo mais robusto e adaptável a mudanças futuras.

    - Facilidade de Teste: Como cada componente pode ser testado separadamente, a arquitetura MVC facilita a implementação de testes automatizados, garantindo a qualidade do software.

## Por que usar a arquitetura MVC?

AA arquitetura MVC é escolhida em projetos de desenvolvimento de software devido à sua organização clara e modularidade. Ela facilita a manutenção e a evolução do sistema, pois separa as preocupações relacionadas à lógica de negócio, à interface do usuário e à interação do usuário. Além disso, promove a reutilização de código e a testabilidade do sistema, tornando-o mais robusto e escalável. Por essas razões, a arquitetura MVC é amplamente adotada na indústria de software para desenvolver uma variedade de aplicativos, desde sistemas web até aplicativos móveis e desktop.

## Vídeo de referência

<center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/jyTNhT67ZyY" title="MVC - Model View Controller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</center>