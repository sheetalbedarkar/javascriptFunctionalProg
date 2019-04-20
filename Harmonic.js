/* @purpose : Prints the Nth harmonic number
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 16/04/19
*/

var utility = require("../Utility/Util")
var read = require("readline-sync")

var num = read.question("Enter the Nth Harmonic value ::")
utility.harmonic(num)