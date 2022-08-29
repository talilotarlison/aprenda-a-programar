//chamando o campo do inpunt do usuario
var minhaTarefa = document.getElementById("minha-tarefa")
//chamando o botao de adicionar tarefas.
var addTarefa = document.getElementById("add-list");
//chamndo a ul onde sera exibido a li na tela do usuario
var addNaTela = document.getElementById("tela");
//adicionando outra forma de escultar evento do click do usuario
//com parametro "onclick" e dpois a função que ele vai execultar.
addTarefa.addEventListener("click", adicionarNaTela)
 
 function adicionarNaTela() {
	// var item = document.createElement("li")
	//imprimindo o conteudo na tela.
	// addNaTela.innerHTML = "conteudo que eu quero exibir" ; obs dessa maneira ele vai  sempre subistituir o anterior.
//addNaTela.innerHTML += "conteudo que eu quero exibir" dessa maneira ele vai encrementar e sempre vai adicionar deixando os que ja tava adicionado antes.	
	 addNaTela.innerHTML =  addNaTela.innerHTML  + `<li class="adicionado">
							<p> ${minhaTarefa.value} </p>
							<button type="submit">X</button>
							</li>`
	   //limpa campo do usuario
	   
	   minhaTarefa.value = ""
   }


/*Coloquei onclick no botao no html para chamar a função myFunctionAlert 

adicionei o alerta na tela tambem, confirmando a operação do usuario

apenas um exemplo que como chamar a função pelo evento de click no botao
*/


function myFunctionAlert(){	
	alert("Tarefa Adicionada com Sucesso!!");
}


/* 
Coloquei onclick no botao no html para chamar a função apagarTudo que vai deixa o campo da ul vazio.
adicionei o alerta na tela tambem.


*/

function apagarTudo(){
	alert("Removido todas as tarefas!!")
	addNaTela.innerHTML = ""
	
}
	   





