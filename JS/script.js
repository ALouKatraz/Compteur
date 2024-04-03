let count = 0;

function Soustraire() {
  count = count - 1;
  document.getElementById("nombre").innerHTML = count;
}
document.getElementById("soustraire").addEventListener("click", Soustraire);

function Raz() {
  count = 0;
  document.getElementById("nombre").innerHTML = count;
}
document.getElementById("RAZ").addEventListener("click", Raz);

function Ajouter() {
  count = count + 1;
  document.getElementById("nombre").innerHTML = count;
}
document.getElementById("ajouter").addEventListener("click", Ajouter);
