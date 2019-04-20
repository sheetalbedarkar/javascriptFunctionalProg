/* @purpose : Gambler
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 16/04/19
*/
var utility = require("../Utility/Util")
var read = require("readline-sync")

var stake = read.question("Enter the intial amount :: ");
var goal = read.question("Enter the goal amount to achived :: ");
var times = read.question("Enter the number of times he/she bet :: ");
utility.gambler(stake, goal, times)