function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        alert('Elemento não encontrado.')
    }else if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('Seletor inválido')
    }
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    // console.log(instrumento);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // console.log(contador);
    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}