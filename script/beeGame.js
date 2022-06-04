
var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;
var tmp2;
var numFlower = parseInt(Math.random() * 10);


function inicial(){
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 3;
    obj = document.getElementById('abelha')
    document.addEventListener("keydown",teclaDw);
    
    tmp=setInterval(enterFrame,20);
    cretePosition();
}


function teclaDw(event){
    let tecla = event.key;
    if(tecla === "ArrowLeft"){
        dx = -1;
    }else if(tecla === "ArrowUp"){
        dy = -1;
        
    }else if(tecla === "ArrowRight"){
        dx = 1;
    }else if(tecla === "ArrowDown"){
        dy = 1;
    }

}

function teclaUp(event){
    let tecla = event.key;
    if(tecla === "ArrowLeft"){
        dx = 0;
    }else if(tecla === "ArrowUp"){
        dy = 0;
    }else if(tecla === "ArrowRight"){
        dx = 0;
    }else if(tecla === "ArrowDown"){
        dy = 0;
    }
}

function enterFrame(){

    if(px >= -20 && px <= 490){
        px+=dx*vel;
    }else if(px < -20 ){
        px = -20
    }else{
        px = 490
    }
    if(py >= -20 && py <= 490){
        py+=dy*vel;
    }else if(py < -20 ){
        py = -20
    }else{
        py = 490
    }
    
    obj.style.left = px+"px"
    obj.style.top = py+"px"
}

window.addEventListener('load', inicial);

/*flores randomicas*/

function cretePosition(){
    var positions = [];
    for(let i = 0; i <= numFlower; i++){
        positions[i] = [(parseInt(Math.random()*480)),(parseInt(Math.random()*510))]
    }
}


function createFlowers(){
    var posi = []

    for(var i = 0; i <= numFlower; i++){
        let gameBack = document.getElementById('gameBack');
        let newFlower = document.createElement('div');
        newFlower.classList.add('flower' , 'nVisited');
        gameBack.appendChild(newFlower);

        var x = (parseInt(Math.random()*480));
        var y = (parseInt(Math.random()*(510-260)+260));

        newFlower.style.left = x +'px';
        newFlower.style.top = y +'px';
        
        posi[i] = [x,y]
    }

}

