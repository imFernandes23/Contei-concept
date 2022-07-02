function saveJson(){
const objeto = JSON.parse(localStorage.getItem('objeto'))
console.log(objeto)
grafico(objeto)
}



function grafico(objeto){
    
    const arrayTentativas = objeto[0]
    const arrayResposta = objeto[1]

    const gap = parseInt(250 / Math.max(...arrayTentativas))



    for(let i = 0; i <= 9 ; i++){
        const barra = document.getElementsByClassName('questaotry')[i]
        const tent = document.getElementsByClassName('tentativas')[i]
        const resp = document.getElementsByClassName('respostas')[i]

        barra.style.height = gap*arrayTentativas[i+1] + 'px'

        tent.innerHTML = `${arrayTentativas[i+1]}`
        resp.innerHTML = `${arrayResposta[i+1]}`
        
    }
}

function finish (){
    const saveResults = JSON.parse(localStorage.getItem('objeto'))
    const text = document.getElementById('obs').value
    const data = new Date();
    const dataFull = data.getDate() +"-"+ (data.getMonth()+1)+"-"+data.getFullYear()
    const hour = data.getHours()+":"+ data.getMinutes()


    saveResults[2] = text
    saveResults[3] = dataFull
    saveResults[4] = hour

    localStorage.setItem('saveResults',JSON.stringify(saveResults))

    const saveJson = JSON.parse(localStorage.getItem('saveResults'))

}

window.addEventListener('DOMContentLoaded', saveJson)