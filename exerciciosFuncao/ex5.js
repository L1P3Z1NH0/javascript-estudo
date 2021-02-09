function arredondar(numero){
    
    valorEmReais = `R$ ${numero.toFixed(2).toString().replace('.',',')}`
    console.log(valorEmReais);

}

arredondar(0.1 + 0.2)