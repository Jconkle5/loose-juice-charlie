$(document).ready(function () {

  const correctDiv = document.getElementById('correct');

  correctDiv.addEventListener('click', function() {
    correctDiv.style.backgroundColor = 'green';
    correctDiv.textContent = 'Correct! En passant is forced, However it would put you in check. Therefore, there are no legal moves and the game is a draw.';
    incorrectDiv.style.backgroundColor = '#ffffff'
    incorrectDiv.textContent = 'Queen f8'
  });

  const incorrectDiv = document.getElementById('incorrect');

  incorrectDiv.addEventListener('click', function() {
    incorrectDiv.style.backgroundColor = 'rgba(187, 0, 0, 1)';
    incorrectDiv.textContent = 'Incorrect! While this may lead to mate in other circumstances; En passant is forced and that is an illegal move.';
    correctDiv.style.backgroundColor = '#ffffff'
    correctDiv.textContent = 'It\'s a draw.'
  });

});