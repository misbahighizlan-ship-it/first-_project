let noms = [];
let lastIndex = -1; 

const txt = document.getElementById("txt");
const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const liste = document.getElementById("liste");
const popup = document.getElementById("popup");
const poptext = document.getElementById("poptext");
const suiv = document.getElementById("suiv");


but1.addEventListener("click", function() {
  const nom = txt.value.trim();
  if (nom === "") {
    alert("Saisie le nom !");
    return;
  }
  if (noms.includes(nom)) {
    alert("Ce nom existe déjà !");
    return;
  }
  const li = document.createElement("li");
  li.textContent = nom;
  liste.appendChild(li);
  noms.push(nom);
  txt.value = "";
  txt.focus();
});

//test git
but2.addEventListener("click", function() {
  if (noms.length === 0) {
    alert("Aucun nom à choisir !");
    return;
  }
  lastIndex = Math.floor(Math.random() * noms.length);
  poptext.innerHTML = `Le nom choisi est : <strong>${noms[lastIndex]}</strong>`;
  popup.style.display = "block";
});


suiv.addEventListener("click", function() {
  if (lastIndex >= 0) {
    liste.removeChild(liste.children[lastIndex]); 
    noms.splice(lastIndex, 1);                   
    popup.style.display = "none";               
    lastIndex = -1;
  }
});
