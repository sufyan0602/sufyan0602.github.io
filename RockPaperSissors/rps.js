function randomInt() {
    return Math.floor(Math.random() * 3);
  }

  function playRPS(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[randomInt()];

    const images = {
      rock: './IMAGES/rock.png',
      paper: './IMAGES/paper.png',
      scissors: './IMAGES/scissors.png'
    };

    const userImage = `<img src="./IMAGES/${userChoice}.png" alt="${userChoice}">`;
    const computerImage = `<img src="${images[computerChoice]}" alt="${computerChoice}">`;

    if (userChoice === computerChoice) {
      return {
        result: 'Tie',
        computer: computerChoice,
        userImage: userImage,
        computerImage: computerImage
      };
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return {
        result: 'Win',
        computer: computerChoice,
        userImage: userImage,
        computerImage: computerImage
      };
    } else {
      return {
        result: 'Lose',
        computer: computerChoice,
        userImage: userImage,
        computerImage: computerImage
      };
    }
  }

  const rockButton = document.getElementById('rock');
  rockButton.addEventListener('click', function () {
    const userChoice = 'rock';
    const result = playRPS(userChoice);
    const computerChoice = result.computer;
    const outcome = result.result;
    const userImage = result.userImage;
    const computerImage = result.computerImage;
    const message =  `${userImage} vs ${computerImage} <br> ${outcome}!`;
    document.getElementById('results').innerHTML = message;
  });

  const paperButton = document.getElementById('paper');
  paperButton.addEventListener('click', function () {
    const userChoice = 'paper';
    const result = playRPS(userChoice);
    const computerChoice = result.computer;
    const outcome = result.result;
    const userImage = result.userImage;
    const computerImage = result.computerImage;
    const message = `${userImage} vs ${computerImage} <br> ${outcome}!`;
    document.getElementById('results').innerHTML = message;
  });

  const scissorsButton = document.getElementById('scissors');
  scissorsButton.addEventListener('click', function () {
    const userChoice = 'scissors';
    const result = playRPS(userChoice);
    const computerChoice = result.computer;
    const outcome = result.result;
    const userImage = result.userImage;
    const computerImage = result.computerImage;
    const message = `${userImage} vs ${computerImage} <br> ${outcome}!`;
    document.getElementById('results').innerHTML = message;
  });
