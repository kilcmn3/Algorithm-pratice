// https://leetcode.com/problems/happy-number/


var isHappy = function(n) {
    // function(n) => return 1 
    // if loops endless return false ex) function(n) => 4, 16 , 37 , 58, 89, 145, 41, 20, 4
    // for loops endless, might need to record whethere the number has been calu before,
    
    var record = {}

    while(n !== 1 && !record[n]){
        record[n] = true
        n = squareOfDigits(n)
    }
    return n === 1 ?  true : false
};

 function squareOfDigits(num){
            num = num.toString().split("")
            return num.reduce((acc,cur) =>{
               return acc + Math.pow(cur, 2) 
            },0)
 }

 isHappy(19)