// variaveis

var tmp
var numBlocks = parseInt(Math.random()*8)
var block

window.addEventListener('load', inicial);

function inicial (){
    setInterval(enterFrame,60)
}

function enterFrame (){
    block = document.getElementsByClassName('bloco')[0]
    let coodernadas = block.getBoundingClientRect()
    console.log(coodernadas.x,coodernadas.y) 
}