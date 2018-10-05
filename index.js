
//Below a FOUR js scenarios evaluated during class
//Uncomment out & save to see console output

//1 of 4 : Determines if a number is even or odd
//var m =12
//(the condition that if true will run the code block)//
//if(m % 2 === 0) {
//    console.log(m, 'is even!');
//}
//(alternate condition when if statement is false)
//else{
//    console.log(m, 'is odd')
//}
//2 of 4 : get console.log to pront out only odd numbers
//in the for loop, think of it as : initial setup or start point point, condition, duration, or routine, post-loop and what to do after the loop if anything.
//for(var i=0; i < 100; i++) {
//    var y = i * 2;
//    if(y < 100) {
//        console.log(y, 'this is a even numbers')
//    }
//}
//3 of 4: See how we declare the var just after the for loop, then 
//afterward we immediately toss it in the 'if' statement, evaluate it, and
//have it spit out the output.
for(var i=0; i <= 100; i++) {
    var remainder = i % 2;
    if(remainder === 0) {
        console.log(i ,'is an even number')
    }
}
//If instead we wrote: 
//for(var i=0; i < 100; i++) {
//       var y = i % 2;
//        if(y === 0) {
//            console.log(i, 'is a number that oscillates between 0 and 1')
//        }
//}
//We get a bunch of 0 & 1 values cause we didn't set our if statement to just output
//even numbers like this ===0 , and adjust the console log to evaulate i and not y       



//3 of 4:  Asks the user's input to evaluate the total number of even values from a given user prompt
//notice our for loop is adjusted to reflect i being less than or equal to the prompted number
//var countTo = prompt('how high should we count to');

//for (var i = 0; i <= countTo; i++){
//    var remainder = i %2;
//    if (remainder === 0) {
//        console.log(i, 'is even');
//    }
//}




