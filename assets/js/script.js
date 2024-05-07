let number = document.querySelector('#number')
let tabuada = document.querySelector('#tabuada')
let calcular = document.querySelector('#calcular')

calcular.addEventListener('click', function() {
    const numberValue = Number(number.value)
    if(numberValue < 1 || numberValue > 20000) {
        tabuada.style.color = 'red'
        tabuada.innerHTML = "ERRO: Insira um número em um intervalo de 1 a 20,000 ou preencha o campo"
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

number.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        const numberValue = Number(number.value)
        if(numberValue < 1 || numberValue > 20000) {
            tabuada.style.color = 'red'
            tabuada.innerHTML = "ERRO: Insira um número em um intervalo de 1 a 20,000 ou preencha o campo"
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
    }
})