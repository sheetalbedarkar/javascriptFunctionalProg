/* @purpose : Permutations of String
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 18/04/19
*/
var utility = require("../Utility/Util")
var read = require("readline-sync")
var str = read.question("Enter the String :: ")
var result = utility.getStringPermutation(str)
console.log(result)