function colorChange() {
  cursiveText = document.getElementsByTagName('em');
  for (var i = 0; i < cursiveText.length; i++) {                                                    
    cursiveText[i].style.color = "red";
  }
}
function undo() {
  cursiveText = document.getElementsByTagName('em');
  for (var i = 0; i < cursiveText.length; i++) {                                                    
    cursiveText[i].style.color = "black";
  }
}
