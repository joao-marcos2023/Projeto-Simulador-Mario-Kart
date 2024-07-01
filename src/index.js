//Pacote de entrada
const prompt = require("prompt-sync")()

//Jogadores

const player1 = {
    name: "mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    points: 0
}
const player2 = {
    name: "luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    points: 0
}
const player3 = {
    name: "bowser",
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    points: 0
}
const player4 = {
    name: "peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    points: 0
}
const player5 = {
    name: "yoshi",
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    points: 0
}
const player6 = {
    name: "donkey kong",
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5,
    points: 0
}



//Função rolar dados
async function rollDice(){
    return Math.floor(Math.random()* 6) + 1;
};

//Função para iniciar jogo
async function getStart(){
    const playStart = prompt("🔴 🟡 🟢 Digite 0 para iniciar a corrida: ")
}

//Seleciona primeiro jogador
async function selectFirstPlayer(){
    let random = Math.floor(Math.random()*6) + 1;
    let first;

    switch(true){
        case random == 1:
            first = player1
            break
        case random == 2:
            first = player2
            break
        case random == 3:
            first = player3
            break
        case random == 4:
            first = player4
        case random == 5:
            first = player5
            break
        default:
            first = player6
            break
    }

    return first
};

//Seleciona segundo jogador
async function selectSecondPlayer(){
    let random = Math.floor(Math.random()*6) + 1;
    let second;

    switch(true){
        case random == 1:
            second = player6
            break
        case random == 2:
            second = player5
            break
        case random == 3:
            second = player4
            break
        case random == 4:
            second = player3
        case random == 5:
            second = player2
            break
        default:
            second = player1.
            break
    }

    return second
};

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch(true){
        case random < 0.33:
            result = "reta"
            break
        case random < 0.66:
            result = "curva"
            break
        default:
            result = "confronto"
            break
    }

    return result
}

//Função resultados das rodadas
async function logRollReseult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
};

//Função da mecânica do jogo
async function playRaceEngine(character1, character2){

    //Gerar rodadas
    for(let round = 1; round <=5; round++){
        console.log(`🏁 Rodada ${round}`)

        //Sortear blocos
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        //Resultado dos dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //Total das habilidades
        let totalSkill1 = 0;
        let totalSkill2 = 0;

        if(block === "reta"){
            totalSkill1 = diceResult1 + character1.velocidade;
            totalSkill2 = diceResult2 + character2.velocidade;

            await logRollReseult(character1.name, "velocidade", diceResult1, character1.velocidade)
            await logRollReseult(character2.name, "velocidade", diceResult2, character2.velocidade)

        }

        if(block === "curva"){
            totalSkill1 = diceResult1 + character1.manobrabilidade;
            totalSkill2 = diceResult2 + character2.manobrabilidade;

            await logRollReseult(character1.name, "manobrabilidade", diceResult1, character1.manobrabilidade)
            await logRollReseult(character2.name, "manobrabilidade", diceResult2, character2.manobrabilidade)

        }

        if(block === "confronto"){
            let powerResult1 = diceResult1 + character1.poder;
            let powerResult2 = diceResult2 + character2.poder

            console.log(`${character1.name} confrontou com ${character2.name}! 🥊`)

            await logRollReseult(character1.name, "poder", diceResult1, character1.poder)
            await logRollReseult(character2.name, "poder", diceResult2, character2.poder)

            //Vencedor do bloco
            if(powerResult1 > powerResult2 && character2.poder > 0){
                console.log(`${character1.name} venceu o confronto! ${character2.name} perdeu um ponto 🐢`)
                character2.points--
            }

            if(powerResult2 > powerResult1 && character1.poder >0){
                console.log(`${character2.name} venceu o confronto! ${character1.name} perdeu um ponto 🐢`)
                character1.points--
            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Ninguém perdeu pontos" : "")

        }

        //Verifca vencedor
        if(totalSkill1 > totalSkill2){
            console.log(`${character1.name} marcou um ponto!`)
            character1.points++
        }else if(totalSkill2 > totalSkill1){
            console.log(`${character2.name} marcou um ponto!`)
            character2.points++
        }

        console.log("-----------------------------------------")

    }
};

async function declareWinner(character1, character2){
    console.log("Resultado final: ")
    console.log(`${character1.name}: ${character1.points} ponto(s)`)
    console.log(`${character2.name}: ${character2.points} ponto(s)`)

    if(character1.points > character2.points){
        console.log(`\n${character1.name} venceu a corrida! Parabéns! 🏆`)
    }else if(character2.points > character1.points){
        console.log(`\n${character2.name} venceu a corrida! Parabéns! 🏆`)
    }else{
        console.log("Corrida terminou empatada!")
    }
};

//Função de chamada de jogo
(async function main(){

    await getStart()
    let firstPlayer = await selectFirstPlayer()
    let secondPlayer = await selectSecondPlayer()
    console.log(`🏁🚨 Corrida entre ${firstPlayer.name} e ${secondPlayer.name} começando...\n`)
    await playRaceEngine(firstPlayer, secondPlayer)
    await declareWinner(firstPlayer, secondPlayer)
    
})();




















