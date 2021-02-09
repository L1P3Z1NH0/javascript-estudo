function jurosSimples(capitalInic, taxJuros, tempoAplica){

    let precoFinal = 0

    for(let i=0; i<tempoAplica; i++){
        precoFinal += (capitalInic/tempoAplica)+(capitalInic/tempoAplica)*taxJuros
    }

    console.log(precoFinal);
    
    return jurosSimples
}

jurosSimples(1000, 0.06, 5)


function jurosCompostos(capitalInic, taxJuros, tempoAplica){

    let precoFinal = 0
    let capitalEJuros = 0

        console.log(`R$ ${capitalInic.toFixed(2)}`);

    for (let i=0; i<tempoAplica; i++){
        capitalEJuros += (capitalInic+capitalEJuros)*taxJuros
        precoFinal = capitalEJuros + capitalInic
        console.log(`R$ ${precoFinal.toFixed(2)}`)
    }

    return jurosCompostos
}

jurosCompostos(500, 0.01, 8)