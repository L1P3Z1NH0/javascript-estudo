function triangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado1 == lado3){
        console.log(`O triângulo é um triângulo equilátero`);
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log(`O triângulo é um triângulo isósceles`);
    }else{
        console.log(`O triângulo é um triâgulo escaleno`);
    }

    return triangulo
}

triangulo(1,1,1)
triangulo(1,2,2)
triangulo(1,3,2)
triangulo(3,3,1)