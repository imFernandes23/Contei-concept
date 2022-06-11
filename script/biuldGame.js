// variaveis

var tmp
var numBlocks = parseInt(Math.random()*8) + 1;
var nowBlock = 0
var placeY = 550
var placeXLeft = 0
var placeXRight = 550
var posiX; 
var posiY;
var velocidade = 4;
var ocorreu = 0;
var py;
var px;
window.addEventListener('load', inicial);

function inicial (){
    setInterval(enterFrame,15)
}

function enterFrame (){
    document.addEventListener('keydown', teclaDw)
    const block = document.getElementsByClassName('bloco')[nowBlock]

    if(ocorreu == 1 && py < placeY){
        block.style.left =  px+"px"
        block.style.top = py+"px"
        py = py + velocidade

        if(py >= placeY && nowBlock < numBlocks){
            nowBlock = nowBlock + 1;
            createBlock();
            ocorreu = 0 
        }
    }

    if(ocorreu == 2 && py < 600){
        block.style.left =  px+"px"
        block.style.top = py+"px"
        py = py + velocidade

        if(py >= 600 && nowBlock < numBlocks){
            nowBlock = nowBlock + 1;
            createBlock();
            ocorreu = 0
        }
    }

    if(ocorreu == 3 && py < 600){
        block.style.left =  px+"px"
        block.style.top = py+"px"
        py = py + velocidade

        if(py >= 600 && nowBlock < numBlocks){
            nowBlock = nowBlock + 1;
            createBlock();
            ocorreu = 0 
        }
    }
}

function teclaDw(event){
    console.log(numBlocks , nowBlock)
    let tecla = event.key
    if(tecla == 'ArrowDown'){
        const block = document.getElementsByClassName('bloco')[nowBlock]
        const coordenadas = block.getBoundingClientRect()

        console.log(coordenadas)

        posiX = coordenadas.x
        posiY =  coordenadas.y
        px = posiX
        py = posiY
        
        
        block.classList.remove('pendurado')

        if(coordenadas.x - placeXLeft > -20 && placeXRight - coordenadas.x+50 < -20){
            console.log('bloco fixou')
            placeY = placeY - 50
            placeXLeft = coordenadas.x
            placeXRight =  coordenadas.x + 50
            ocorreu = 1
        }else if(coordenadas.x - placeXLeft <= -20){
            console.log('bloco caiu pra esquerda')
            ocorreu = 2
        }else if(placeXRight - coordenadas.x+50 <= -20){
            console.log('bloco caiu pra direita')
            ocorreu = 3
        }

        console.log(placeXRight)

    }
   
}

function create(){
    let gamePlay = document.getElementById('playG')

    gamePlay.remove();
    for(let i = 0 ; i <= numBlocks; i ++){
        let gameBack = document.getElementById('gameBack');
        let newBlock =  document.createElement('div')
        newBlock.classList.add('unBlock')
        gameBack.appendChild(newBlock)
    }
    createBlock();
}

function createBlock(){
    let block = document.getElementsByClassName('unBlock')[nowBlock]
    block.classList.add('bloco', 'pendurado', nowBlock) 
}