// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
console.log( amigos );


function agregarAmigo(){

     let nuevoAmigo =  document.getElementById('amigo').value;  
     if (nuevoAmigo==''){
        alert("Por favor ingrese un nombre valido");
        return;
     } 


     amigos.push(nuevoAmigo); // Añade amigo al final
     console.log( amigos );
     actualizaLista(nuevoAmigo);
     
}

function actualizaLista(nuevoAmigo){
    var ul =  document.getElementById('listaAmigos');
    var li = document.createElement('li');
    var text = document.createTextNode(nuevoAmigo);
    li.appendChild(text);
    ul.appendChild(li);
}

function sortearAmigo(){
    if(amigos.length>0){
        
        let numAleatorio = Math.floor(Math.random()*amigos.length)+1;
        console.log(amigos[numAleatorio-1]);
        //document.getElementById('resultado').innerHTML(amigos[numAleatorio-1]);
        document.getElementById('resultado').innerHTML = "El amigo secreto sorteado es " + amigos[numAleatorio-1];


    }
}