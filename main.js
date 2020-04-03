const doorImage1 = document.getElementById(`door1`);
const doorImage2 = document.getElementById(`door2`);
const doorImage3 = document.getElementById(`door3`);
const startButton = document.getElementById('start');
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let numClosedDoors = 3;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random(0, 2) * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

const playDoor = (door) => {
  numClosedDoors -= 1;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
    
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
    } else {
    return true;
    }
}
    
doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying === true) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying === true) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying === true) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

if (currentlyPlaying === false) {
  startButton.onclick = () => {
    startRound();
  }
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
}














