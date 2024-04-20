// var a = ["Ali", "Hamza", "Faseeh"]

// var b = "Hamza"

// for (var i = 0 ; i < a.length ; i++){
//   if (a[i] === b){
//     console.log(a[i] + " found at index " + i);
//     break;
//   }  
// }
// if (a[i] != b) {
//     console.log(b + " Not found");
//   }



// var a = [
//     "Faisal",
//     "Abu bakar",
//     "Muhammad Muaviya",
//     "Muhammad Ali",
//     "Muhammad Hamza",
//     "Abdullah",
// ];

// var b = "Muhammad Hamza";

// var found = false

// // for(var i = 0 ; i < a.length ; i++){
// //     // console.log(a[i])
// //     if(a[i] == b){
// //         console.log("Word Found", a[i])
// //     }else{
// //         console.log("Word not found")
// //     }
// // }

// for(var i = 0; i < a.length ; i++){
//     if(a[i] === b){
//         found = true
//     }
// }

// if(found == true){
//     console.log("Found")
// }else{
//     console.log("Not Found")
// }

var a = ["a","b","c","d","e"]
var b = [1,2,3,4,5]

// Output 
// var c = ["1a","1b","1c","1d","1e","2a","2b","2c","2e" .......... "5e"]

var c = []

for(var i = 0 ; i < a.length ; i++){
    for(var j = 0; j < b.length; j++){
        console.log(a[i],b[j])
        c.push(a[i]+b[j])
    }
}
console.log(c)

// // create an array
// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3, 4, 5];

// // create a variable for the sum and initialize it
// let sum = 0;

// // iterate over each item in the array
// for (let i = 0; i < a.length; i++ ) {
//   sum += a[i]+b[i];
  
// }

// console.log(sum);