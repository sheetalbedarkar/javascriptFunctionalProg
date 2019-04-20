/* @purpose : Calculate the roots of the equation
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 17/04/19
*/

var utility = require("../Utility/Util")
var read = require("readline-sync")
var a = read.question("Enter the value of a :: ")
var b = read.question("Enter the value of a :: ")
var c= read.question("Enter the value of a :: ")
utility.quadratic(a, b, c)