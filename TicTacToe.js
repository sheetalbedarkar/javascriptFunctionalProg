/* @purpose : Tic Tak Toe Game
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 18/04/19
*/

var utility =require("../utility/util");
var read = require("readline-sync");
function ticTacToe() {
    var flag = false;
    var arr = utility.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
   
    var count = 1;
    while (count <= 9) {
        arr = utility.computerPlayer(arr);
        count++;
        while (count > 4) {
            flag = utility.check(arr);
            break;
        }
        if (flag) {
            console.log("Computer is the winner. Better luck next time");
            break;
        }
        else if (count == 8) {
            console.log("Draw match.. Try next!");
            break;
        }
        arr = utility.userPlayer(arr);
        while (count > 4) {
            flag = utility.check(arr);
            break;

        }
        if (flag) {
            console.log("Gosh!.. I knew it. You are the winner");
            break;
        }
        count++;
    }
    console.log("Game end");
}
ticTacToe();