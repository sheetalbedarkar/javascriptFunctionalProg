/* @purpose : User input and Replace String Template
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 15/04/19
*/

var utility = require("../Utility/Util")
var read = require("readline-sync");

var name = read.question("Enter the user name :: ")
utility.username(name);
