function mijnFunctie() {
      var stuk = document.getElementById("paragraaf1");
      console.log(stuk.innerHTML);
      var titel = document.getElementById("titel");
      tekst = "De tekst en kleur van de titel is net veranderd!";
      titel.innerHTML = tekst;
      titel.style.color = "steelblue";
      stuk.innerHTML = "Dingen werken!";
}
