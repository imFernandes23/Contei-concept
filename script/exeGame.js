let questao = 1
let arrayTry = []
let gameAtual 

function  next(){
    let questaoId = document.getElementById('questNumber')
    questaoId.innerHTML = `Questão ${questao}/10`
    let text = document.getElementById('questHelpId')

    if(questao%2 != 0){
        games('beeGame.html')
        text.innerHTML = help(1)
        gameAtual = "beeGame"
        
    }else{
        games('biuldGame.html')
        text.innerHTML = help(2)
        gameAtual = "biuldGame"
        
    }
    
    questao++
}



function games(loc){
    document.getElementById('iframeGame').src = loc;
}

function help(questao){
    switch(questao){
        case 1:
           let beeGame = 'Ajude a abelha a coletar o pólen de todas as flores, use as teclas direcionais &larr;, &uarr;, &rarr; e &darr; para mover a abelha, e depois escreva o número de flores que você visitou no quadro à direita.' 
           return beeGame
        break;
        case 2:
            let biuldGame = 'Vamos construir.<br>Use a tecla &darr; para soltar os blocos, após terminar de construir o edifícil escreva o número de andares do nosso prédio, no quadro ao lado.'
            return biuldGame
        break;
        default:
    }
}


function resposta(){
    const iframe = document.getElementById('iframeGame')
    const iWindow = iframe.contentWindow;
    const iDocument = iWindow.document;
    const reGame = iDocument.getElementById('reGame').innerHTML;
    const res = iDocument.getElementById('txt')
    const handwriten = document.getElementById('result').innerHTML;
    const test = parseInt(reGame)+parseInt(handwriten);

    console.log(test)

    if(parseInt(handwriten) == parseInt(reGame)){
        res.innerHTML = `Parabéns.<br>Visitamos ${reGame} flores.`
    }else if(parseInt(handwriten) > parseInt(reGame)){
        res.innerHTML = `Humm...<br>Visitamos um pouco menos que ${handwriten} flores.`
    }else if(parseInt(handwriten) < parseInt(reGame)){
        res.innerHTML = `Humm...<br>Visitamos um pouco mais que ${handwriten} flores.`
    }else{
        res.innerHTML = `Não entendi<br>Pode escrever de novo?`
    }
}

function resGames(values, eventos){

}
window.addEventListener('DOMContentLoaded', next)