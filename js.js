var pos = 0;

function moveRight(pos) {
  var element = document.getElementsByClassName("moving-text")[0];
  newPos = pos + 1;
  element.style.right = newPos + "px";
  console.log("positie = " + newPos);
  positionTest(newPos);
}

function positionTest(pos) {
  if (pos != 5) {
    moveRight(pos);
  } else if ((pos = 200)) {
    pos = 0;
    console.log("opnieuw");
    moveRight(pos);
  } else {
    console.log("hier gaat wat fout");
  }
}

//positionTest(pos);
