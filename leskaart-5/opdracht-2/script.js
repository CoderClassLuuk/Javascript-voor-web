var knop = document.getElementById("veranderKnop");
knop.addEventListener("click", mijnFunctie);

function mijnFunctie() {
  var delen = ["deel1", "deel2", "deel3"];
  var tekst = ["Soms moet je gewoon", " dingen printen om er ", "achter te komen wat er mis is!"];
  console.log(tekst[0])
  var kleuren = ['#e5f5f9','#99d8c9','#2ca25f'];
  
  for (var i = delen.length - 1; i >= 0; i--) {
    console.log("i heeft de waarde: " + i);
    var stuk = document.getElementById(delen[i]);
    stuk.innerHTML = tekst[i];
    stuk.style.color = kleuren[i];
  }
}
