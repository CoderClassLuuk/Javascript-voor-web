var versnel = document.getElementById("auto");

var errorMessage = document.getElementById("error");

var counter = 0;

function verander(){
  versnel.src = "https://www.autowereld.nl/I182331538/640x0/suzuki-swift-1-2-5drs-select-nieuw-direct-leverbaar.jpg";
  counter = counter + 1
  if (counter > 1) {
    versnel.src = "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2015/05/2016-Lamborghini-Aventador-LP750-4-SV-155-e1435602904751-626x382.jpg";
  }
  if (counter > 2) {
    versnel.src = "http://i0.kym-cdn.com/photos/images/original/001/370/005/7b1.jpeg";
  }
  if (counter > 3) {
    errorMessage.innerHTML = "ERROR: Upgrade not possible";  
  }  
}
