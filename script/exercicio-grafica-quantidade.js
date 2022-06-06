
function resposta(){
    const iframe = document.getElementsByClassName('beeGameIframe')[0]
    const iWindow = iframe.contentWindow;
    const iDocument = iWindow.document;
    const numFlowers = iDocument.getElementById('numFlowers').innerHTML;
    const res = iDocument.getElementById('resGame').innerHTML
    const handwriten = document.getElementById('result').innerHTML;
    const test = parseInt(numFlowers)+parseInt(handwriten);

    console.log(res.innerHTML = handwriten)
}

