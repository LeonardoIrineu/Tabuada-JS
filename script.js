function tabuada(){
    let numero = document.querySelector('#numero')
    let soma = document.querySelector('#soma')
    let subtração = document.querySelector('#subtração')
    let multiplicação = document.querySelector('#multiplicação')
    let divisão = document.querySelector('#divisão')
    
    if (numero.value.length == 0){
        alert('Preencha o campo [NÚMERO]')
    } else {
        let num = Number(numero.value)
        soma.innerHTML = ''
        subtração.innerHTML = ''
        multiplicação.innerHTML = ''
        divisão.innerHTML = ''
        for (let contador = 1;contador <= 10; contador++) {
            let item = document.createElement('option') //criar elemento em JS na tag select
            item.text = `${num} + ${contador} = ${num+contador}`
            item.value = `resultado${contador}` // saber qual valor estão selecionando
            soma.appendChild(item) //adicionar elemento filho
        }
        for (let contador2 = 1; contador2 <= 10; contador2++) {
            let item = document.createElement('option')
            item.text = `${num} - ${contador2} = ${num-contador2}`            
            subtração.appendChild(item)
        }
        for (let contador3 = 1; contador3 <= 10; contador3++) {
            let item = document.createElement('option')
            item.text = `${num} x ${contador3} = ${num*contador3}`
            multiplicação.appendChild(item)
        }
        for (let contador4 = 1; contador4 <= 10; contador4++) {
            let item = document.createElement('option')
            item.text = `${num} ÷ ${contador4} = ${num/contador4}`
            divisão.appendChild(item)
        }
    }
}

// abaixo feito com o while

// let c = 1
// while(c <= 10){
//     let item = document.createElement('option') 
//     item.text = `${num} x ${c} = ${num*c}`
//     item.value = `resultado${c}` 
//     resultado.appendChild(item)
//     c++
// }