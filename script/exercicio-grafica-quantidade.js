
function resposta(){
    const iframe = document.getElementsByClassName('beeGameIframe')[0]
    const iWindow = iframe.contentWindow;
    const iDocument = iWindow.document;
    const reGame = iDocument.getElementById('reGame').innerHTML;
    const res = iDocument.getElementById('txt')
    const handwriten = document.getElementById('result').innerHTML;
    const test = parseInt(reGame)+parseInt(handwriten);

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

