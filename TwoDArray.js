/* @purpose : To print 2-D Array
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 18/04/19
*/
var utility = require("../Utility/Util")
var read = require("readline-sync")
var row = read.question("Enter the number of rows :: ")
var coloumn = read.question("Enter the number of coloumns :: ")
utility.array1(row, coloumn, read)