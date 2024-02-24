var a = +prompt("Enter Your Math Marks")
var b = +prompt("Enter Your Urdu Marks")
var c = +prompt("Enter Your Computer Marks")
var d = +prompt("Enter Your Biology Marks")
var e = +prompt("Enter Your Pakistan Studies Marks")

// console.log(a,b,c,d)

var sum = (a+b+c+d+e)
// console.log(sum)

var total = sum / 500 * 100

if(total > 79){
    alert(`"Excellent! You Got ${total}% A+ Grade"`)
}else if(total > 69){
    alert(`"Congratulation! You Got ${total}% A Grade"`)
}else if(total > 59){
    alert(`"Congratulation! You Got ${total}% B Grade"`)
}else if(total > 49){
    alert(`"Congraulation! You Got ${total}% and C Grade"`)
}else{
    alert(`Sorry! You Got ${total}% and Failed"`)
}