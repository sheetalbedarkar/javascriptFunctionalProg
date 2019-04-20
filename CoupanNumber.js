/* @purpose : Coupan Number
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 16/04/19
*/

var utility = require("../Utility/Util")
var read = require("readline-sync")

var num = read.question("Enter the number :: ");
utility.collect(num);
