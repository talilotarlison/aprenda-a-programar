
//Todos os produtos disponiveis

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


// Variavel de validação dos produtos

	let produtoInternacional =  true

// validação produto A	
	if(produtoA["internacional"] == produtoInternacional) {
		valorFinalInternacional = produtoA.valor * 1.2
        console.log(`Esse produto é importado, seu valor final é de ${valorFinalInternacional} R$`);

    } else {  valorFinalNacional = produtoA.valor * 1.12
        console.log(`Esse produto é nacional, seu valor final é de ${valorFinalNacional} R$`);
    }
	
// validação produto B	
	if(produtoB["internacional"] == produtoInternacional) {
		valorFinalInternacional = produtoB.valor * 1.2
        console.log(`Esse produto é importado, seu valor final é de ${valorFinalInternacional} R$`);

    } else {  valorFinalNacional = produtoB.valor * 1.12
        console.log(`Esse produto é nacional, seu valor final é de ${valorFinalNacional} R$`);
    }
// validação produto C

	if(produtoC["internacional"] == produtoInternacional) {
		valorFinalInternacional = produtoC.valor * 1.2
        console.log(`Esse produto é importado, seu valor final é de ${valorFinalInternacional} R$`);

    } else {  valorFinalNacional = produtoC.valor * 1.12
        console.log(`Esse produto é nacional, seu valor final é de ${valorFinalNacional} R$`);
    }