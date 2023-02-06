const teclas = document.querySelectorAll('.tecla');

//Realizamos um loop que passa por todos os elementos e adiciona a função de playSom
teclas.forEach(element => {

    element.addEventListener('click',
        //Pegamos o nome da classe do botão adicionamos o '#som_' mais o resto do nome da classe do botão
        //assim obtemos o nome da classe do som que queremos ouvir
        () => playSom(`#som_${element.classList[1]}`));

    element.onkeydown = (e) => {
        if (e.code === 'Enter' || e.code === 'Space') element.classList.toggle('ativa');
    }
    element.onkeyup = (e) => {
        if (e.code === 'Enter' || e.code === 'Space') element.classList.toggle('ativa');
    }
});

function playSom(seletorAudio) {

    const element = document.querySelector(seletorAudio);

    //Verifica se o elemento e ou não uma tag de audio
    if (element.localName === 'audio') {
        element.play();
    }
    //Verifica se o elemento voltou nulo ou não no sistema
    else {
        console.log(`Elemento n'ao encontrado`)
    }
}