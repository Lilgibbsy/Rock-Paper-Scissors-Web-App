let score = 0;
let botScore = 0;
//Function
document.getElementById("button").addEventListener("click", animate);
function animate() {
  //Randomizer
  let playerMove = document.getElementById("playerMove").value;
  let rndm = Math.round(Math.random() * 2);
  //Random bot move
  if (!(playerMove == "")) {
    if (rndm == 0) {
      document.getElementById("imageBot").src = "img/paper.png";
      document.getElementById("imageBot").style.height = "300px";
      document.getElementById("imageBot").style.width = "300px";
    } else if (rndm == 1) {
      document.getElementById("imageBot").src = "img/rock.png";
      document.getElementById("imageBot").style.height = "300px";
      document.getElementById("imageBot").style.width = "300px";
    } else if (rndm == 2) {
      document.getElementById("imageBot").src = "img/scissors.png";
      document.getElementById("imageBot").style.height = "300px";
      document.getElementById("imageBot").style.width = "300px";
    }
  }
  //No player move
  if (
    !(
      playerMove.toLowerCase() == "paper" ||
      playerMove.toLowerCase() == "rock" ||
      playerMove.toLowerCase() == "scissors"
    )
  ) {
    document.getElementById("imageBot").src = "img/loading.gif";
    document.getElementById("imageBot").style.height = "300px";
    document.getElementById("imageBot").style.width = "300px";
    document.getElementById("imagePlayer").src = "img/loading.gif";
    document.getElementById("imagePlayer").style.height = "300px";
    document.getElementById("imagePlayer").style.width = "300px";
    document.getElementById("winOrLose").innerHTML = "";
  }
  //Player move
  if (playerMove.toLowerCase() == "paper") {
    document.getElementById("imagePlayer").src = "img/paper.png";
    document.getElementById("imagePlayer").style.height = "300px";
    document.getElementById("imagePlayer").style.width = "300px";
  } else if (playerMove.toLowerCase() == "rock") {
    document.getElementById("imagePlayer").src = "img/rock.png";
    document.getElementById("imagePlayer").style.height = "300px";
    document.getElementById("imagePlayer").style.width = "300px";
  } else if (playerMove.toLowerCase() == "scissors") {
    document.getElementById("imagePlayer").src = "img/scissors.png";
    document.getElementById("imagePlayer").style.height = "300px";
    document.getElementById("imagePlayer").style.width = "300px";
  }
  //Proccess win or lose
  if (playerMove.toLowerCase() == "paper" && rndm == 0) {
    document.getElementById("winOrLose").innerHTML = "Tie";
  } else if (playerMove.toLowerCase() == "paper" && rndm == 1) {
    document.getElementById("winOrLose").innerHTML = "Win";
    score += 1;
  } else if (playerMove.toLowerCase() == "paper" && rndm == 2) {
    document.getElementById("winOrLose").innerHTML = "Lose";
    botScore += 1;
  }
  if (playerMove.toLowerCase() == "rock" && rndm == 0) {
    document.getElementById("winOrLose").innerHTML = "Lose";
    botScore += 1;
  } else if (playerMove.toLowerCase() == "rock" && rndm == 1) {
    document.getElementById("winOrLose").innerHTML = "Tie";
  } else if (playerMove.toLowerCase() == "rock" && rndm == 2) {
    document.getElementById("winOrLose").innerHTML = "Win";
    score += 1;
  }
  if (playerMove.toLowerCase() == "scissors" && rndm == 0) {
    document.getElementById("winOrLose").innerHTML = "Win";
    score += 1;
  } else if (playerMove.toLowerCase() == "scissors" && rndm == 1) {
    document.getElementById("winOrLose").innerHTML = "Lose";
    botScore += 1;
  } else if (playerMove.toLowerCase() == "scissors" && rndm == 2) {
    document.getElementById("winOrLose").innerHTML = "Tie";
  }
  //Score
  document.getElementById("score").innerHTML = `Score: ${botScore} - ${score}`;
}
