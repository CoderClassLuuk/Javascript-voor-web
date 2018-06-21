var vraag1 = prompt("Geef een naam voor de titel van deze pagina.");
document.getElementById("titel").innerHTML = vraag1;

var vraag2 = prompt("Geef een naam voor het eerste stuk tekst van deze pagina.");
document.getElementById("p1").innerHTML = vraag2;

var vraag3 = prompt("Geef een naam voor het tweede stuk tekst van deze pagina.");
document.getElementById("p2").innerHTML = vraag3;

var vraag4 = prompt("Geef een naam voor het derde stuk tekst van deze pagina.");
document.getElementById("p3").innerHTML = vraag4;

var kleur0 = document.getElementById("titel");
kleur0.innerHTML = kleur0.innerHTML.fontcolor("blue");

var kleur1 = document.getElementById("p1");
kleur1.innerHTML = kleur1.innerHTML.fontcolor("green");

var kleur2 = document.getElementById("p2");
kleur2.innerHTML = kleur2.innerHTML.fontcolor("blue");

var kleur3 = document.getElementById("p3");
kleur3.innerHTML = kleur3.innerHTML.fontcolor("green");
