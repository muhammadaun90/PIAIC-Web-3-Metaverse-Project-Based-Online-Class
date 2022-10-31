/* Rock Paper Scissors game
This is a game between a player and the computer, where both will make a random
selection of either Rock, Paper, or Scissors (alternatively, you could create a version
using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
Scissors will beat out Paper. You can use JavaScript to create your own version of
this game, applying the logic with an if statement. Since this project is a little more
difficult, here are some suggested steps:
1. Create an array that contains the variables Rock, Paper, and Scissors.
2. Set up a variable that generates a random number 0-2 for the player and then
do the same for the computer's selection. The number represents the index
values in the array of the 3 items.
3. Create a variable to hold a response message to the user. This can show the
random results for the player and then also the result for the computer of the
matching item from the array.
4. Create a condition to handle the player and computer selections. If both are
the same, this results in a tie.
5. Use conditions to apply the game logic and return the correct results.
There are several ways to do this with the condition statements, but you
could check which player's index value is bigger and assign the victory
accordingly, with the exception of Rock beating Scissors.
6. Add a new output message that shows the player selection versus the
computer selection and the result of the game. */

const choices = ["Rock", "Paper", "Scissors"];
let player = Math.floor(Math.random() * 3);
let computer= Math.floor(Math.random() * 3);
let message = "player " + choices[player] + " vs computer " + choices[computer] + " ";
if(player === computer){
    message += "Its a tie"
}
else if(player > computer){
    if(computer == 0 && player == 2){
        message += "Computer wins";
    }
    else{
        message += "Player wins";
    }
}
else{
    if(computer == 2 && player == 0){
        message += "Player wins";
    }
    else{
        message += "Computer wins"
    }
}
console.log(message);