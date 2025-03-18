// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo()
{
    let AmigoIngresado = document.getElementById("amigo").value;
    listaDeAmigos.push(AmigoIngresado);
    actualizarLista();
    console.log(listaDeAmigos)
    limpiar();
    return
}

function limpiar()
{
    document.getElementById("amigo").value = "";
}

function actualizarLista()
{
    let ListaHTML = document.getElementById('listaAmigos');
    ListaHTML.innerHTML = "";

    for(let i = 0; i < listaDeAmigos.length;i++)
    {
        let li =  document.createElement("li")
        li.textContent = listaDeAmigos[i];
        ListaHTML.appendChild(li);
    }
}
function sortearAmigo()
{
    let IndiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    let elegido = listaDeAmigos[IndiceAleatorio];
    document.getElementById('resultado').innerText = "Amigo Secreto : " + elegido
    document.getElementById('listaAmigos').innerHTML = '';
}
function reinicioJuego()
{
    listaDeAmigos = [];
    document.getElementById('resultado').innerText = "";

}
    