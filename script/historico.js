
const saveJson = JSON.parse(localStorage.getItem('saveResults'))

console.log(saveJson)

if(saveJson != null){
    const saveLog = document.getElementsByClassName('savelog')[0]
    saveLog.classList.add('active')
    saveLog.getElementsByClassName('date')[0].innerHTML = `${saveJson[3]}`
    saveLog.getElementsByClassName('hour')[0].innerHTML = `${saveJson[4]}`
    saveJson[0].shift()
    saveLog.getElementsByClassName('tentativas')[0].innerHTML = `(${saveJson[0]})`
    saveJson[1].shift()
    saveLog.getElementsByClassName('respostas')[0].innerHTML = `(${saveJson[1]})`
    saveLog.getElementsByClassName('observacao')[0].innerHTML = `${saveJson[2]}`
}