let number = document.querySelector('#number')
let tabuada = document.querySelector('#tabuada')
let calcular = document.querySelector('#calcular')

calcular.addEventListener('click', function() {
    const numberValue = Number(number.value)
    if(numberValue < 1) {
        tabuada.style.color = 'red'
        tabuada.innerHTML = "ERRO: Não insira um número menor igual a 0 ou preencha o campo!"
    } else {
        tabuada.innerHTML = ""
        for(let i = 1; i <= 10; i++) {
            tabuada.style.color = 'blue'
            let calc = `${i} x ${numberValue} = ${numberValue*i}`
            let resultado = document.createElement('p')
            resultado.innerHTML = calc
            tabuada.appendChild(resultado)
        }
    }
})