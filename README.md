<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">FNT (protótipo)</h3>

<div align="center">

[![Organizer](https://img.shields.io/badge/organizer-shawee-orange.svg)](https://shawee.io)
[![Hackathon](https://img.shields.io/badge/hackathon-hack%20for%20good-blueviolet.svg)](https://hack-for-good.shawee.io)
[![Status](https://img.shields.io/badge/status-prototype-blue.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ARTHURPC03/FNT.svg)](https://github.com/ARTHURPC03/FNT/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ARTHURPC03/FNT.svg)](https://github.com/ARTHURPC03/FNT/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Um portal voltado para o entretenimento em quarentena e o combate á <i>fake news</i>.
    <br> 
</p>

## 📝 Sumário

- [Capturas de tela](#problem_statement)
- [Tema do projeto / Problema para solucionar](#problem_statement)
- [Idéia / Solução](#idea)
- [Dependências / Limitações](#limitations)
- [Escopo futuro](#future_scope)
- [Como executar](#getting_started)
- [Tecnologias utilizadas](#tech_stack)
- [Autores](#Autores)
- [Agradecimento](#Agradecimento)

## 📸 Capturas de tela <a name = "screenshots"></a>
![Image](.github/MainB.png)
![image](.github/MainW.png)
![image](.github/EntB.png)
![image](.github/EntW.png)
![image](.github/ProfB.png)


## 🧐 Tema do projeto / Problema para solucionar <a name = "problem_statement"></a>

O mundo inteiro vem tentando se adaptar às consequências trazidas pela crise mundial com a pandemia do novo Coronavírus, mas, quando a ordem é "ficar em casa", muitos de nós podemos nos sentir impotentes e buscando formas de ajudar os mais impactados por essa crise.

Com lockdown decretado em várias empresas, quarentena estabelecida em diversas cidades do Brasil e do mundo, algumas questões que já vinham sendo discutidas no universo da comunicação ficaram ainda mais evidentes:

- Como podemos criar formas de melhorar e democratizar o acesso à informação?
- Como os negócios podem contuniar operando em época de quarentena?
- Como manter o contato e apoio à saúde mental durante o isolamento?
- Como auxiliar quem continua precisando sair de casa para trabalhar?

Com todos estes pontos, a pergunta final é:

### Como usar a comunicação como aliada para ajudar pessoas e negócios durante a crise que enfrentamos?

As melhores idéias para esta solução serão premiadas.

## 💡 Idéia / Solução <a name = "idea"></a>

A nossa idéia consiste em criar um portal, ou uma plataforma, para combater as _fake news_, deixando ela atrativa para todo o tipo de público.

Com isso, o nosso portal vai ter alguns segmentos, explicados á seguir:

### Rastreador de Fake News

- Postagens serão feitas por usuários e também recolhidas de sites de notícias automaticamente
- Todas as postagens terão um sistema de pontuação e classificação, com valores de 1 á 5 estrelas, na qual os usuários votarão
- As postagens com pontuação próxima a 1, são mais propensas á serem _fake news_, assim como as postagens com pontuação próxima a 5, são mais propensas á serem _noticias verdadeiras_
- Os usuários podem cadastrar **referências bibliográficas** em cada notícia, fazendo com que a interação com a notícia seja maior, dando mais pontos positivos ou negativos á notícia.
- As notícias também terá uma sessão de comentários, para interação e discussão sobre a notícia ou referência bibliográfica da mesma
- Pode se fazer a pesquisa de alguma notícia, assim como o cadastro de uma nova é facilitado

### Gráficos

- Serão mostrados dados em formatos de gráficos simplificados, para compreensão de tais dados em relação ao mundo, continente, país, estado, etc
- Pode se filtrar informações de cada região através de um campo de busca

### Entretenimento

- Uma sessão mais descontraída, para quem não está procurando por notícias sobre a pandemia, mas maneiras de como fazer uma interação social a distância, ou coisas relacionadas
- Os usuários farão postagem de coisas para entreter os outros usuários durante o período de quarentena, como cursos gratuitos, experiências, documentários, filmes, aplicativos, etc
- Dentro de cada postagem, além da descrição, terá uma sessão de comentários, para esclarecimento de dúvidas e interação entre o criador da postagem e os demais usuários
- Todas as postagens terão um sistema de pontos, para classificar os posts mais relevantes ou com mais discussão

### Sistema de gamificação

- Um sistema simples de [gamificação](https://pt.wikipedia.org/wiki/Ludificação), fazendo com que seja mais interessante interagir na plataforma, ganhando reconhecimento (seja por postagem de notícias, publicações de referências bibliográficas, publicação de entretenimento ou interação social com os usuários na plataforma)
- O sistema de reconhecimento fica em cada sessão, tendo um placar dos usuários que mais interagem na plataforma
- Existirá, de princípio, dois placares: semanal e total
- Posteriormente, há a chance de recompensas em prêmios com futuras parcerias da plataforma


## ⛓️ Dependências / Limitações <a name = "limitations"></a>

- O público alvo na nossa plataforma é amplo, desde os idosos sem muito conhecimento de tecnologia, até os mais jovens que usufruem sempre da internet;
- A plataforma deve ser objetiva, interativa, informativa e atrativa;
- Para refletir positivamente em todo o público alvo, a plataforma deve ser responsiva, e talvez ser considerado ela ser _**mobile first**_;
- Para que a plataforma alcance todos os públicos possíveis, o foco deve ser uma página da web, pensando posteriormente em fazer aplicativos para celular;

## 🚀 Escopo futuro <a name = "future_scope"></a>

A aplicação tem como objetivo futuro ser colocada no ar, para que o combate á _fake news_ seja feito, e ao mesmo tempo, a plataforme auxilie os usuários com interação social na quarentena.

## 🏁 Como executar <a name = "getting_started"></a>

Estas instruções vão fazer com que seja instalado e execute este projeto em sua máquina local **somente para propósitos de teste e desenvolvimento**.

### Pré requisitos

Para colocar em ambiente de desenvolvimento, é preciso instalar o [yarn](https://classic.yarnpkg.com/pt-BR/)

Também deve se ter em mente que no ambiente de desenvolvimento, terá dois servidores: o **back end** (lida com o banco de dados e todas as informações, somente uma API) e o **front end** (a página da web na qual está a plataforma)

### Installing

Antes de iniciar os servidores de desenvolvimento, deve-se instalar as dependências

**Terminal 1 - Back end**

``cd backend; yarn install; yarn start``


**Terminal 2 - Front end**

``cd frontend; yarn install; yarn start``


## ⛏️ Tecnologias utilizadas <a name = "tech_stack"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJS](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Autores <a name = "Autores"></a>

- [ARTHURPC](https://github.com/arthurpc03) - Idéia e desenvolvimento
- [Fleflis](https://github.com/fleflis) - Idéia, design e desenvolvimento

Também disponível uma lista de [todos os contribuidores](https://github.com/arthurpc03/FNT/contributors) que participaram deste projeto.

## 🎉 Agradecimento <a name = "Agradecimento"></a>

- [Rocketseat](https://rocketseat.com.br), por auxiliar com a stack de desenvolvimento e a divulgação do hackaton
- [Shawee](https://shawee.io), por organizar e disponibilizar o hackaton
- Todos os mentores que nos auxiliaram com o desenvolvimento da idéia deste projeto
- Uma menção honrosa aos mentores que nos incentivaram e gostariam de utilizar a nossa plataforma no futuro ( [Marco Aurelio](mailto:petrelli@petrellidesign.com.br), [Sicy Melo](mailto:sicyrg@gmail.com) )
