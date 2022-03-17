var body = document.getElementById('corpo')

var div = document.createElement('div')

var div1 = document.createElement('img')
var div2 = document.createElement('img')
div1.setAttribute('id', 'lamp')
div1.setAttribute('src', 'imagens/lampadapagada.png')
div2.setAttribute('id', 'interrup')
div2.setAttribute('src', 'imagens/interruptor.png')
div.append(div1)
div.append(div2)

body.append(div)

document.getElementById('interrup').onclick=function(){
    if(div1.src.match('imagens/lampadapagada.png')){
        div1.removeAttribute('src', 'imagens/lampadapagada.png')
        div1.setAttribute('src', 'imagens/lampadacesa.png')
        div2.removeAttribute('src', 'imagens/interruptor.png')
        div2.setAttribute('src', 'imagens/interruptorapagado.png')
        body.style.backgroundColor = '#191970';

}else{
    div1.removeAttribute('src', 'imagens/lampadacesa.png')
    div1.setAttribute('src', 'imagens/lampadapagada.png')
    div2.removeAttribute('src', 'imagens/interruptorapagado.png')
    div2.setAttribute('src', 'imagens/interruptor.png')
    body.style.backgroundColor = '#D1D42F'
}
}





