let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre) {
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    console.log(amigos);
    listarAmigos();
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

function listarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(function (amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  document.getElementById(
    "resultado"
  ).textContent = `Amigo sorteado: ${amigoSorteado}`;
  amigos = [];
  listarAmigos();
}
