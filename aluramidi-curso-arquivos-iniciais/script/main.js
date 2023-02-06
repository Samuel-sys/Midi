const teclas = document.querySelectorAll('.tecla');

//Realizamos um loop que passa por todos os elementos e adiciona a função de playSom
teclas.forEach(element => {

    element.addEventListener('click',
    //Pegamos o nome da classe do botão adicionamos o '#som_' mais o resto do nome da classe do botão
    //assim obtemos o nome da classe do som que queremos ouvir
    () => playSom(`#som_${element.classList[1]}`));
});

function playSom(element) {
    document.querySelector(element).play();
}