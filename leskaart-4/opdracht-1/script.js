var kiezer = document.getElementById("select");
kiezer.addEventListener("click", veranderKleur);

function veranderKleur() {
  var kiezerKeuze = kiezer.value;
  var tekst = document.getElementById("tekst");
  tekst.style.color = kiezerKeuze;
}
