function somaNumeros(numero1 , numero2){

    console.log("A soma de" , numero1 , "mais" , numero2 , "é:" , numero1 + numero2)

}

somaNumeros(37694 , 1)


function maiorOuIgual(numero1 , numero2){

    console.log("O número" , numero1 , "é maior que" , numero2 , "?" , numero1 >= numero2)
}

maiorOuIgual(50 , 25)


function numeroPar(numero){

    console.log("O número" , numero , "é par." , numero % 2 ===0)
}

numeroPar(35)


function salarioLiquido(salarioBruto){

    const descontoInss = 10/100
    const salarioDesc = salarioBruto * descontoInss
    const liquido = salarioBruto - salarioDesc

    return liquido
}
   console.log(salarioLiquido(1000))