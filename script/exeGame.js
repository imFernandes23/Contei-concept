let questao = 1
let intervalo = 1
var arrayTry = ['inicio']
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
    
}



function games(loc){
    document.getElementById('iframeGame').src = loc;
}

function help(questao){
    let txt
    switch(questao){
        
        case 1:
           txt = 'Ajude a abelha a coletar o pólen de todas as flores, use as teclas direcionais &larr;, &uarr;, &rarr; e &darr; para mover a abelha, e depois escreva o número de flores que você visitou no quadro à direita.' 
        break;
        case 2:
            txt = 'Vamos construir.<br>Use a tecla &darr; para soltar os blocos, após terminar de construir o edifícil escreva o número de andares do nosso prédio, no quadro ao lado.'
        break;
        default:
    }
    return txt;
}


function resposta(){
    const iframe = document.getElementById('iframeGame')
    const iWindow = iframe.contentWindow;
    const iDocument = iWindow.document;
    const reGame = iDocument.getElementById('reGame').innerHTML;
    const res = iDocument.getElementById('txt')
    const handwriten = document.getElementById('result').innerHTML;
    var arrayTry = ['inicial', 0, 0]
    let point = 0

    if(parseInt(handwriten) == parseInt(reGame)){
        res.innerHTML = resGames(gameAtual, 1, handwriten, reGame)
        if(questao == intervalo){
                questao++
        }
    }else if(parseInt(handwriten) > parseInt(reGame)){
        res.innerHTML = resGames(gameAtual, 2, handwriten, reGame)
        if(questao == intervalo){
            
        }
    }else if(parseInt(handwriten) < parseInt(reGame)){
        res.innerHTML = resGames(gameAtual, 3, handwriten, reGame)
        if(questao == intervalo){
            
        }
    }else{
        res.innerHTML = resGames(gameAtual, 4, handwriten, reGame)
    }
}

function resGames(game, eventos , handwriten, reGame){
    let txt;
    switch(game){
        case 'beeGame':
            switch(eventos){
                case 1:
                    txt =  `Parabéns.<br>Visitamos ${reGame} flor(es).`
                break;
                case 2:
                    txt =  `Humm...<br>Visitamos um pouco menos que ${handwriten} flor(es).`
                break;
                case 3:
                    txt = `Humm...<br>Visitamos um pouco mais que ${handwriten} flo(res).`
                break;
                case 4:
                    txt = `Não entendi.<br>Pode escrever de novo?`
                break;
                default:
                }
        break;  
        case "biuldGame":
            switch(eventos){
                case 1:
                    txt =  `Parabéns.<br>Nosso prédio tem ${reGame} andar(es).`
                break;
                case 2:
                    txt =  `Humm...<br>Nosso prédio tem um  pouco menos que ${handwriten} andar(es).`
                break;
                case 3:
                    txt = `Humm...<br>Nosso prédio tem um pouco mais que ${handwriten} andar(es).`
                break;
                case 4:
                    txt = `Não entendi.<br>Pode escrever de novo?`
                break;
                default:
                }
        break;        
        default:
    }
    return txt
}
window.addEventListener('DOMContentLoaded', next)