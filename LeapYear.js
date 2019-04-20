/* @purpose : To Check the year is leap year or not
* @author  : Sheetal Shamkant Bedarkar
* @version : 1.0
* @since   : 15/04/19
*/
var utility = require("../Utility/Util");
var read = require("readline-sync");

var year = read.question("Enter the year :: ");
utility.leapYear(year)
