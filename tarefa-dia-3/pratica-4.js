 //verificar numeros primo:
 
 //Criei uma variavel com arrey de todos os numeros selecionados para teste. 
	let todosNumeros = [17,2,7,8,5,23,15,1500450271]
//Agora criei uma outra Variavel, onde nela vamos selecionar o array e o indice do numero que desejamos fazer o teste.

	let numero = todosNumeros[6]
 
 function verificaNumeroPrimo (numero) {
      let verificaNumeroPrimo = true
      for (let contador = 2; contador < numero; contador ++){
        if (numero % contador === 0){
          verificaNumeroPrimo = false;
          break
        }}
       if(verificaNumeroPrimo == true && numero !==1 && numero !== 0) {
          console.log (`Sim, O numero  ${numero} é primo`)
        }else {console.log (`Não, O numero ${numero} não é primo`)
        }
    }
//agora do numero so chamar a função com a variavel numero com a posição do array escolhido.
verificaNumeroPrimo(numero)