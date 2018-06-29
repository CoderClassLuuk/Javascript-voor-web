var versnel = document.getElementById("auto");

var message = document.getElementById("tekst");

var counter = 0;

function verander(){
  versnel.src = "https://www.autowereld.nl/I182331538/640x0/suzuki-swift-1-2-5drs-select-nieuw-direct-leverbaar.jpg";
  message.innerHTML = "Uw Canta LX is geüpgrade naar een Suzuki."
  counter = counter + 1
  if (counter > 1) {
    versnel.src = "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2015/05/2016-Lamborghini-Aventador-LP750-4-SV-155-e1435602904751-626x382.jpg";
    message.innerHTML = "Uw Suzuki is geüpgrade naar een zeer snelle Lamborghini."
  }
  if (counter > 2) {
    versnel.src = "http://i0.kym-cdn.com/photos/images/original/001/370/005/7b1.jpeg";
    message.innerHTML = "Uw zeer snelle Lamborghini is geüpgrade naar een spirituele afbeelding."
  }
  if (counter > 3) {
    message.innerHTML = "ERROR: Upgrade not possible";  
  }  
}
