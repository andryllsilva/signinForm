const inputs = document.querySelectorAll('.input')
const botao = document.querySelector('button')
const alerta = document.querySelectorAll('.alerta')
 

botao.addEventListener('click', function (event) {
    event.preventDefault()
    verificar()
})

function verificar(){
    inputs.forEach((item, index) => {
        if(item.value === ''){
            item.classList.add('borda-vermelha')
            alerta[index].classList.add('opacidade')
        }
    })
}