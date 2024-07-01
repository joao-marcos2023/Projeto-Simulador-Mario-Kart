# Simulador de corridas Mário Kart com Node JS

## Projeto desenvolvido baseado no desafio proposto pelo curso Node Fundamentals da DIO.

### 💻 Tecnologias

<div>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" height="80" alt="nodejs logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="80" alt="nodejs logo"/>
</div>

### 🔍 Observações

O projeto é um simulador de corridas do conhecido jogo Mário Kart que roda direto no console da máquina.

Foi desenvolvido com **JavaScript** e com a ferramenta **Node JS** como parte do meu aprendizado em programação
**Back-end**. Portanto, tive a oportunidade aplicar conceitos de lógica, da linguagem JavaScript e uso do Node JS.

## ⚡ Novas funcionalidades

Acrescentei duas novas funcionalidades que não estavam no projeto original:

1️⃣A primeira é um pacote de dados de entrada que permite ao usuário iniciar o jogo.

Esse pacote é o **prompt-sync** na qual por meio de um prompt de comando o
usuário digita 0 para iniciar a corrida. Você pode instalá-lo pelo comando: ``` npm i prompt-sync```

2️⃣A segunda é que os dois jogadores que irão disputar a corrida são selecionados aleatóriamente.

Para isso acontecer criei duas funções assíncronas que geram um número entre 1 e 6 e por meio de
uma condicional **switch** o primeiro e segundo jogadores são selecionados.

## 🎮 Como jogar

As regras do jogo permanecem as mesmas do projeto base:


<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada.</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

## 🕹 Jogue  em sua máquina

Baixe os arquivos do diretório **src**. Para executá-lo no terminal use o comando: ``` node index.js```.

Para instalar o pacote de entrada de dados usuado no jogo: ``` npm i prompt-sync```.

Você precisará ter instalado em sua máquina o [Node JS](https://nodejs.org/en).








