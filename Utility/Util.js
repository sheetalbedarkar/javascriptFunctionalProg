/****************************************************************************************************/
//  * @purpose :to deploy all the business logic
//  * @file    :util.js
//  * @author  :Sheetal Shamkant Bedarkar
//  * @version :1.0
//  * @since   :15/04/2019 
/***************************************************************************************************/


const readline = require('readline-sync');
module.exports = {
/******************************* String Template ***************************************/
//@purpose      : To ensure that user name should be minimum 3 characters, not a number
//                 and must be an alphabet, then replace the username with user input 
//                 and print the value.
//@param        : Invoke this method and pass user input as parameter.
//@function     : username takes the user input and prints the value 
/*************************************************************************************/

username(name)
{
    let str = /[a-zA-Z]/
    try
    {
        if(name.length >= 3 && isNaN(name) && str.test(name))
        {
            var input = "Hello <<username>>, How are you ?"
            var output = input.replace("<<username>>", name);
            console.log(output)
        }
        else
        {
            if(!isNaN(name)) throw "User name must not be a number.."
            if(name.length < 3) throw "User name must be minimum 3 digits"
            if(!str.test(name)) throw "User name must be a string"
        }      
    }
    catch(e)
    {
        console.log(e)
    }    
},

/*********************************** Flip Coin *******************************************/
// * @purpose :By using rondam function filp the coin the number of times the user input and 
// *           print percentage of heads and tails
// * @param   :pass no of coin flips
/****************************************************************************************/
coinFlip(flips)
{
    let randNum = 0;
    let head = 0
    let tail = 0;
    let hPerc
    let tPerc
    let counter = 1;
    try
    {
        if(flips<0) throw "Enter the positive number"
        while(counter<=flips)
        {
            randNum = Math.random();
            console.log(counter + " " + randNum)
            if(randNum < 0.5)
            {
                head++;
                console.log("Head")
            }
            else
            {
                tail++;
                console.log("Tail")
            }
        counter++;
        }
        console.log("Number of heads are :: "+head)
        console.log("Number if tails are :: "+tail)
        hPerc = (head * 100)/flips;
        console.log("Percentafe of getting Head :: "+hPerc)
        tPerc = (tail * 100)/flips;
        console.log("Percentafe of getting Tail :: "+tPerc)
    }  
    catch(e)
    {
        console.log(e)
    }
},

/*********************** Leap Year **************************/
//@purpose  : To Check Leap year or not
//@param    : Take 4 digit user input String
/***********************************************************/

leapYear(year)
{
    try
    {
        if(year.length < 4) throw "Year must be 4 digit"
        if(year.length > 4) throw "Year must be 4 digit"
        if(((year%4==0) && (year%100!=0)) || (year % 400 == 0))
        {
            console.log(year + " Year is Leap year")
        }
        else
        {
            console.log(year + " Year is not Leap year")
        }        
    }
    catch(e)
    {
        console.log(e)
    }
},

/******************************** Power of Two ********************************************/
// * @purpose     :To Accept value of "N" from user and prints a table of the powers of 2 
//                  that are less than or equal to 2^N. value of N should be less then 31.
// * @param       :Prints the value of two's power, accepting input from the command line 
//                  argument.
// * @function    :function checks the given number is less then 31, if less than 31, then 
//                  it prints the value of two's power i.e., 2^N value
/******************************************************************************************/

powerOfTwo()
{
    try
    {    
    var power = process.argv[2]
    if(power >= 0 && power < 31 && !isNaN(power))
    {
        for(let i = 0; i <= power; i++)
        {
            console.log("2^"+ i +" = " +Math.pow(2, i));
        } 
    }
        if(power > 32 || power < 0) throw "OVERFLOW!!!!!!"   
    }
    catch(e)
    {
        console.log(e)
    }    
},

/********************************** Harmonic Series *********************************/
// * @purpose   :Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
// * @param     :To generate sum of harmonic numbers by accepting input from user
// * @function  :function Harmonic function takes user input and sum it number of
// *              times that user given.
/**********************************************************************************/
harmonic(num)
{
    var sum = 0;
    i = 0;
    try
    {
        if(num != 0)
        {
            for(i = 1; i <= num; i++)
            {
                sum += (1 / i)
                console.log("1 /" + i + " + ")
            }
            console.log("Harmonic series "+ num + " = "+ sum);
        }
        if(num == 0) throw "Number should not be ZERO..!!"    
    }
    catch(e)
    {
        console.log(e)
    }    
},

/********************************* Prime Factors *****************************************/
// * @purpose     : To generate the prime factorials of N number using brute force.
// * @param       : Prints the factorials of a number by accepting the num as argument.
// * @function    : Traverse till i*i <= N instead of i <= N for efficiency and prints the 
// *                factorials for the given user input value.
/****************************************************************************************/

primeFactor(num)
{
    try
    {
        var i;
        for(i = 2 ; i * i < num ; i++)
        {
            while(num % i == 0)
            {
                console.log(i);
                num = num / i;
            }
        }
        if(num > 2)
        {
            console.log(num)
        }
        if(num == 0) throw "Number should not be ZERO..!!"
    }
    catch(e)
    {
        console.log(e)
    }
},

/*************************************** Gambler *********************************************/
// * @purpose     : Simulates a gambler who start with some initial stake amount and plays 
//                  fair one bets until he/she goes broke (i.e. has no money) or reach 
//                  goal(gains expected amount). Keeps track of the number of times he/she wins
//                  and the number of bets he/she makes. will run the experiment N times, 
//                  averages the results, and prints them out.
// * @param       : It accepts the stake and the goal amount from the user, where stake<goal and
//                  must be a number also it keeps track on the number of times he/she bets and 
//                  prints the percentage of win and loss and the number of wins.
// * @function    : Play till the gambler is broke or has won.
/****************************************************************************************/

gambler(stake, goal, times)
{
    try
    {
        var win = 0;
        var loss = 0;
        if(times == 0) throw "You should bet atleast once.."
        if(stake > goal) throw "stake should be less than goal"
        for(let i = 0 ; i <= times ; i++)
        {
            while(times > 0 && stake <= goal && stake > 0)
            {
                if(Math.random() > 0.5)
                {
                    win++;
                    stake++;
                    times--;
                }
                else
                {
                    loss++;
                    stake--;
                    times--;
                }
            }
        }
        var total = win + loss;
        var winPerc = (win / total) * 100
        var lossPerc = (loss / total) * 100
        console.log("Percentage of win :: " + winPerc + "%");
        console.log("Percentage of loss :: " + lossPerc + "%")
    }
    catch(e)
    {
        console.log(e)
    }
},

/********************************* Coupan Number *****************************************/
// * @purpose  : Given N distinct Coupon Numbers, how many random numbers do you need to
// *             generate distinct coupon number? This program simulates this random process.
// * @param    : To print the distinct numbers by accepting the N number from the user. 
// * @function : repeatedly choose a random number and check whether it's a new one.
/****************************************************************************************/

getCoupan(coupon)
    {
        return (Math.round(Math.random() * coupon));
    },
    //return number of cards you collect before obtaining one of each of the n types
    collect(num)
    {
        var isCollect = []; //isCollect[i] = true if card type i already collected
        var distinct = 0; // number of distinct card types collected
        var count = 0; // numbers of cards collected
        while(distinct < num)
        {
            var value = this.getCoupan(num) // pick a random card
            console.log(value);
            count++;
            if(!isCollect[value]) // discovered new card type
            {
                distinct++;
                isCollect[value] = true;
            }
        }
        return count;
    },

/************************************* 2D Array *****************************************/
// * @purpose     : To create 2 dimensional array in memory to read in M rows and N cols. 
// * @param       : It accepts rows, cols and the elements from the user and prints the output. 
// * @function    : A library for reading in 2D arrays of integers, doubles, or booleans 
// *                from standard input and printing them out to standard output.
/****************************************************************************************/
array1(row, coloumn, read)
{
    try
    {
        if(row < 0) throw "Array Index Out Of Bound Exception!!!"
        if(coloumn < 0) throw "Array Index Out Of Bound Exception!!!"
        var arr = [];
        var element;
        for(let i = 0; i < row; i++)
        {
            arr.push([]);
            for(let j = 0; j < coloumn; j++)
            {
                element = read.question("Enter the array elements :: ")
                arr[i][j] = element;
            }
        }
        for(let i = 0; i < arr.length; i++)
        {
            var temp = "";
            for(let j = 0; j < arr[i].length; j++)
            {
                temp = temp + (arr[i][j] + " ");
            }
            console.log(temp);
        }
    }
    catch(e)
    {
       console.log(e) 
    }
},

/************************************** Triplets *******************************************/
//  * @purpose :A function with cubic running time. Read in N integers and counts the   
//  *           number of triples that sum to exactly 0.Output is number of distinct triplets as
//  *           well as the second output is to print the distinct triplets.
//  * @param   :N number of integer, and N integer input array
/******************************************************************************************/

triplets(arr, n)
{  
    var found1 = false;
    try
    {
        for(var i = 0; i<n-2; i++)
            {
                for(var j = i+1; j<n-1; j++)
                {
                    for(var k = j+1; k<n; k++)
                    {
                        if(arr[i] + arr[j] + arr[k] == 0)
                        {
                            console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                            console.log();
                            found1 = true;
                        }
                    }
                }
            }
        if(found1 == false) throw "Numbers with sum 0 are not exists"
    }
    
    catch(e)
    {
        console.log(e)
    }
},   

/********************************* Euclidian Distance ***********************************/
//  * @purpose : Function to takes two integer command-line arguments x and y and 
//  *            prints the Euclidean distance from the point (x, y) to the origin (0, 0). 
//  *            The formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function
/*****************************************************************************************/
euclidean()
{
    var x = process.argv[2]
    var y = process.argv[3]
    var distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
    console.log("Euclidian distance from (x, y) to origin (0, 0) is ::" + distance)
},


/********************************************** Permutation **************************************************/
//  * @Purpose -Function to calculate permutation of a String using iterative method and Recursion method. Check 
//  *           if the arrays returned by two string functions are equal. 
//  * @param   -take input String
/************************************************************************************************************/

getStringPermutation(string) {
    try {
        var res = [];
        if (string.length === 1) {
            res.push(string);
            return res;
        }
        for (var i = 0; i < string.length; i++) {
            var firstChar = string[i];
            var charsLeft = string.substring(0, i) + string.substring(i + 1);
            var innerPermutations = this.getStringPermutation(charsLeft);
            for (var j = 0; j < innerPermutations.length; j++) {
                res.push(firstChar + innerPermutations[j]);
            }
        }
        return res;
    } catch (e) {
        console.log(e.message);
    }
},

/******************************************* StopWatch ************************************************/
//  * @purpose : Stopwatch Program for measuring the time that elapses between the
//               start and end clicks
//  * @param {*} read 
/*****************************************************************************************************/
stopWatch(read)
{
    var startTime = read.question("Press Enter to start ");
    var start = new Date;
    var stopTime = read.question("Press Enter to stop ");
    var stop = new Date;
    var totalTime = stop - start;
    totalTime = totalTime / 1000;
    var second = Math.round(totalTime);
    console.log(second + " sec");
},

/**************************************** TicTacToe **************************************************/
//  * @purpose :functions to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the
//              Player 2 is the user. Player 1 take Random Cell that is the Column and Row. 
/****************************************************************************************************/

intializeGame() {
    var game = [];
    for (let i = 0; i <= 2; i++) {
        game.push([]);
        for (let j = 0; j <= 2; j++)
            game[i][j] = '-';
    }
    return game;
},

random() {
    var value = Math.floor(Math.random() * 3);
    // console.log(value + 1);
    return value;
},

mark(game, x, y, value) {
    if (game[x][y] == '-')
        game[x][y] = value;
    for (let i = 0; i <= 2; i++) {
        var print = [];
        for (let j = 0; j <= 2; j++)
            print[j] = game[i][j];
        console.log(print);

    }
    console.log("\n");
    return game;
}
,
computerPlayer(game) {
    var arr;
    var flag = false;
    while (flag == false) {
        var x = this.random();
        var y = this.random();
        if (game[x][y] == '-') {
            arr = this.mark(game, x, y, 'O');
            flag = true;
        }
    }
    return game;
},
userPlayer(game) {
    var flag = false;
    while (flag == false) {
        console.log("Enter the row value:");
        let x = readline.questionInt('Enter the value of x within 1,2,3 : ') - 1;
        let y = readline.questionInt('Enter the value of y within 1,2,3 : ') - 1;
        if (game[x][y] == '-') {
            this.mark(game, x, y, 'X');
            flag = true;
        }
        else
            console.log("Please enter the correct choice");
    }
    return game;
}
,
check(game) {
    for (let i = 0; i <= 2; i++) {
        if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
            if (game[i][0] == 'O' || game[i][0] == 'X') {
                return true;
            }
        }
        if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
            if (game[0][i] == 'O' || game[0][i] == 'X') {
                return true;
            }
        }
    }
    var k = 0, l = 0;
    if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
        if (game[0][0] == 'O' || game[0][0] == 'X') {
            return true;
        }
    }
    if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
        if (game[0][0] == 'O' || game[0][0] == 'X') {
            return true;
        }
    }
    return false;
},
 
/***************************************** Quadratic Equations ***********************************************/
//  * @purpose :  find the roots of the equation a*x*x + b*x + c. Since the equation is x*x, hence there are 2 roots.
//                The 2 roots of the equation can be found using a formula 
//                 delta = b*b - 4*a*c
//                 Root 1 of x = (-b + sqrt(delta))/(2*a)
//                 Root 2 of x = (-b - sqrt(delta))/(2*a)
// * @param    :  Take a, b and c as input values to find the roots of x.
/*********************************************************************************************************/
quadratic(a, b, c)
{
    try
    {
        var root1, root2;
        var delta = b * b - 4 * a * c;
        if(delta > 0)
        {
            root1 = (- b + Math.sqrt(delta)) / (2 * a)
            root2 = (- b + Math.sqrt(delta)) / (2 * a)
            console.log("Roots of the equation are :: " + root1 + " " + root2);
        }
        if(delta < 0) throw "Roots are IMAGINARY.!!!"
    }
    catch(e)
    {
        console.log(e)
    }
},      

/**************************************** WindChill **************************************************/
//  * @purpose  : To calculate windChilll
//  * @param    : Takes two command line argument
/*****************************************************************************************************/
windchill()
{
    var t = process.argv[2]
    var v = process.argv[3]
    var w = 0;
    try
    {
        if(t < 50 && v > 3 && v < 120)
        {
            w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log("Temperature = " + t)
            console.log("wind speed = " + v)
            console.log("wind chill = " + w)
        }
        else
        {
            if(t > 50 || v > 120 || v < 3) throw "NOT VALID..!!!!"
        }
    }
    catch(e)
    {
        console.log(e)
    }
}
}