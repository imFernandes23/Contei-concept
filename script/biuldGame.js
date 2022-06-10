// variaveis

var tmp
var numBlocks = parseInt(Math.random()*8)
var numberBlock = 0
var nowBlock = numberBlock
var placeY = 550
var placeXLeft = 0
var placeXRight = 550
var posiX; 
var posiY;
var velocidade = 5;
var ocorreu;
var py;
var px;
window.addEventListener('load', inicial);

function inicial (){
    setInterval(enterFrame,15)
}

function enterFrame (){
    document.addEventListener('keydown', teclaDw)
    const block = document.getElementsByClassName(nowBlock)[0]
    if(ocorreu == 1 && py < placeY){
        block.style.left =  px+"px"
        block.style.top = py+"px"
        py = py + velocidade
        console.log('ekko')
    }


}

function teclaDw(event){
    let tecla = event.key
    if(tecla == 'ArrowDown'){
        const block = document.getElementsByClassName(nowBlock)[0]
        const coordenadas = block.getBoundingClientRect()

        posiX = coordenadas.x
        posiY =  coordenadas.y
        px = posiX
        py = posiY
        
        block.classList.remove('pendurado')

        if(coordenadas.x - placeXLeft > -10 && placeXRight - coordenadas.x+50 > -10){
            console.log('bloco fixou')
            placeY = placeY - 54
            placeXLeft = coordenadas.x
            placeXRight = coordenadas.x + 50
            ocorreu = 1
        }else if(coordenadas.x - placeXLeft <= -10){
            console.log('bloco caiu pra esquerda')
            ocorreu = 2
        }else if(placeXRight - coordenadas.x+50 <= -10){
            console.log('bloco caiu pra direita')
            ocorreu = 3
        }
        console.log(coordenadas.x, coordenadas.y)
        
    }
    console.log(placeY)
}

function create(){
    let gamePlay = document.getElementById('playG')

    gamePlay.remove();
    createBlock();
}

function createBlock(){
    let gameBack = document.getElementById('gameBack')
    let newBlock = document.createElement('div')
    
    newBlock.classList.add('bloco' , 'pendurado', numberBlock)
    gameBack.appendChild(newBlock)
    console.log(gameBack)
    
}