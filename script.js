function tabuada(){
    let numero = document.querySelector('#numero')
    let resultado = document.querySelector('#resultado')
    
    if (numero.value.length == 0){
        alert('Preencha o campo [NÚMERO]')
    } else {
        let num = Number(numero.value)
        resultado.innerHTML = ''
        for (let c = 1;c <= 10;c++){
            let item = document.createElement('option') //criar elemento em JS na tag select
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `resultado${c}` // saber qual valor estão selecionando
            resultado.appendChild(item) //adicionar elemento filho
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