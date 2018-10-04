var m =11
//(the condition that if true will run the code block)//
//if(m % 2 === 0) {
//    console.log(m, 'is even!');
//}
//(alternate condition when if is false)
//else{
//    console.log('none shall pass')
//}
//in the for loop, think of it as : initial setup or start point point, condition, post-loop
//for(var i=0; i< 100; i++) {
//    var y = i % 2;
//    if(y < 100) {
//        console.log('this is a list of even numbers', y)
//    }
    
//}
//for(var i=0; i< 100; i++) {
 //   var remainder = i % 2;
 //   if(remainder === 0) {
 //       console.log('this is a list of even numbers', i)
 //   }
//}
var countTo = prompt('how high should we count to');

for (var i = 0; i < countTo; i++){
    var remainder = i %2;
    if (remainder === 0) {
        console.log(i, 'is even');
    }
    }




