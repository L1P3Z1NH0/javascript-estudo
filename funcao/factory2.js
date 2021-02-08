function criarProd (nome, preco, desconto = 0.1){
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProd('Tomate', 5));
console.log(criarProd('Geladeira', 1800));
console.log(criarProd('Salgadinho', 9));
console.log(criarProd('Refrigerante', 4));