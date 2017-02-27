// wait for the DOM to finish loading
$(document).ready(function() {
  var $box = $('.col-xs-4');
  var player = prompt('Do you want to play as X or O?');
  choosePlayer();

function choosePlayer() {
  player = player.toUpperCase();
  while (player !== 'X' && player !== 'O') { //as long as the player does not choose X or O, it will continue to prompt.
    player = prompt('Must choose X or O! Please try again.').toUpperCase();
  } if (player === 'X' || player === 'O') {
    return player;
  }
}

function switchPlayer() {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
  return player;
}

function checkForDraw() {
  //empty_boxes uses the grep method on JQuery object to search through the columns for text,
  //those that return false for having text will be reported as an array of empty boxes, converted to a number with .length.
  var empty_boxes = jQuery.grep( $box, function(box){
    return !$(box).text();
  });
  if (empty_boxes.length === 0) {
    alert('It was a draw!');
    playAgain();
    resetBoard();
  }
}

function playAgain() {
  var playAgain = confirm('Would you like to play again?');
  if (playAgain) {
    player = prompt('Do you want to play as X or O?');
    choosePlayer();
  } else {
    alert('Bummer!');
  }
}

function resetBoard() {
  $box.text('').removeClass('X O'); // clears out text & class
}


function evaluateWinner() {
  var $box0 = $box[0].innerText;
  var $box1 = $box[1].innerText;
  var $box2 = $box[2].innerText;
  var $box3 = $box[3].innerText;
  var $box4 = $box[4].innerText;
  var $box5 = $box[5].innerText;
  var $box6 = $box[6].innerText;
  var $box7 = $box[7].innerText;
  var $box8 = $box[8].innerText;
  if (
    ($box0 === 'X' && $box1 === 'X' && $box2 === 'X') ||
    ($box3 === 'X' && $box4 === 'X' && $box5 === 'X') ||
    ($box6 === 'X' && $box7 === 'X' && $box8 === 'X') ||
    ($box0 === 'X' && $box4 === 'X' && $box8 === 'X') ||
    ($box2 === 'X' && $box4 === 'X' && $box6 === 'X') ||
    ($box0 === 'X' && $box3 === 'X' && $box6 === 'X') ||
    ($box1 === 'X' && $box4 === 'X' && $box7 === 'X') ||
    ($box2 === 'X' && $box5 === 'X' && $box8 === 'X')) {
      alert('X wins!');
      resetBoard();
      playAgain();
  } else if (
    ($box0 === 'O' && $box1 === 'O' && $box2 === 'O') ||
    ($box3 === 'O' && $box4 === 'O' && $box5 === 'O') ||
    ($box6 === 'O' && $box7 === 'O' && $box8 === 'O') ||
    ($box0 === 'O' && $box4 === 'O' && $box8 === 'O') ||
    ($box2 === 'O' && $box4 === 'O' && $box6 === 'O') ||
    ($box0 === 'O' && $box3 === 'O' && $box6 === 'O') ||
    ($box1 === 'O' && $box4 === 'O' && $box7 === 'O') ||
    ($box2 === 'O' && $box5 === 'O' && $box8 === 'O')) {
    alert('O wins!');
    resetBoard();
    playAgain();
  }
  checkForDraw();
}


  $box.on('click', function playersMove() {
    if ( $(this).text() ) { //selected box's text cannot already be filled
      alert('That space is already taken!');
    } else {
      $(this).text(player).addClass(player);
      switchPlayer();
    }
    evaluateWinner();
  });


 });
