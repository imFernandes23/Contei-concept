
var dx;
var dy;
var px;
var py;
var vel;
var velFixed
var obj;
var tmp;
var tmp2;
var numFlower = parseInt(Math.random() * 10);
var posi = []


function inicial(){
    dx = 0
    dy = 0
    px = 20
    py = 20
    vel = 8
    velFixed = 8
    obj = document.getElementById('abelha')
    document.addEventListener("keydown",teclaDw);

    
    tmp=setInterval(enterFrame,60);
}


function teclaDw(event){
    let tecla = event.key;
    if(tecla === "ArrowLeft"){
        dx = -1;
        vel = velFixed
    }else if(tecla === "ArrowUp"){
        dy = -1;
        vel = velFixed
    }else if(tecla === "ArrowRight"){
        dx = 1;
        vel = velFixed
    }else if(tecla === "ArrowDown"){
        dy = 1;
        vel = velFixed
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

    if(px >= 0 && px <= 510){
        px+=dx*vel;
    }else if(px < 0 ){
        px = 0
        dx = dx*(-1)
        vel = vel - 2
    }else{
        px = 510
        dx = dx*(-1)
        vel = vel -2
    }
    if(py >= 0 && py <= 510){
        py+=dy*vel;
    }else if(py < 0 ){
        py = 0
        dy = dy*(-1)
        vel = vel - 2
    }else{
        py = 510
        dy = dy*(-1)
        vel = vel - 2
    }
    
    obj.style.left = px+"px"
    obj.style.top = py+"px"

    polenRemove();
}

window.addEventListener('load', inicial);

/*flores randomicas*/

function createWorld(){
    
    let x = parseInt((480/(numFlower+1))/2)
    let y = 0
    
    let gamePlay = document.getElementById('gP');
    let sun = document.getElementById('sun');
    let cloud = document.getElementById('cloud');
    let bee = document.getElementById('abelha');
    let terra = document.getElementById('terrain');


    terra.classList.add('terreno')
    bee.classList.add('bee')
    sun.classList.add('gameScore')
    cloud.classList.add('cloud')
    gamePlay.remove()


    for(let i = 0; i <= numFlower; i++){
        let gameBack = document.getElementById('gameBack')
        let newFlower = document.createElement('div');
        newFlower.classList.add('flower' , 'nVisited' , i)
        gameBack.appendChild(newFlower)

        /*x = (parseInt(Math.random()*480));*/
        y = (parseInt(Math.random()*(480-240)+240));

        newFlower.style.left = x +'px';
        newFlower.style.top = y +'px';
        
        posi[i] = [x+30,y+20];

        x = x + parseInt(480/(numFlower+1));
    }



}

function dist(Ax, Ay, Bx, By){
    let distancia = Math.sqrt( (Ax - Bx) ** 2 + (Ay - By) ** 2 );
    return distancia;
}


function polenRemove(){
    let test =  document.getElementsByClassName('flower');
    let point = document.getElementsByClassName('unPoint')
    

    for(let i = 0; i<= numFlower; i++){
        let cpx = px + 20;
        let cpy = py + 20;
        let fpx = posi[i][0];
        let fpy = posi[i][1];

        if(dist(cpx,cpy,fpx,fpy) < 20 ){
            test[i].classList.remove('nVisited')
            point[i].classList.add('point')
        }
    }
    
}

