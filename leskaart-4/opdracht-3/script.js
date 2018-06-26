var klikkertje = 0;

clickCount = document.getElementById("aantalkliks");

function klikkie(){
  klikkertje = klikkertje + 1;
  console.log(klikkertje);
  console.log(clickCount)
  clickCount.innerHTML = klikkertje;
}
