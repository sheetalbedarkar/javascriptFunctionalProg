/* @purpose : Flip coin and percentage of the heads and tails
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 15/04/19
*/

var utility = require("../Utility/Util");
var read = require("readline-sync");

var flips = read.question("Enter the number of times, coin should be flipped :: ");
utility.coinFlip(flips)