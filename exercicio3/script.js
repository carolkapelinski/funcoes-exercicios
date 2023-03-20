function funcao1(param1 , param2){

    return param1 + param2
}
function funcao2(param1 , param2){

    return param1 - param2
}
function funcao3(param1, param2){

    return param1 / param2
}
function funcao4(param1 , param2){

    return param1 * param2
}

const resposta1 = Number(prompt("Digite um número"))
const resposta2 = Number(prompt("Digite outro número"))

let retornoFuncao1 
let retornoFuncao2
let retornoFuncao3
let retornoFuncao4

retornoFuncao1 = funcao1(resposta1 , resposta2)
retornoFuncao2 = funcao2(resposta1 , resposta2)
retornoFuncao3 = funcao3(resposta1 , resposta2)
retornoFuncao4 = funcao4(resposta1 , resposta2)

console.log(retornoFuncao1)
console.log(retornoFuncao2)
console.log(retornoFuncao3)
console.log(retornoFuncao4)