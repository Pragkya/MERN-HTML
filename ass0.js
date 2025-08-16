// JavaScript is a high-level, interpreted programming 
// language mainly used in web development to make web pages interactive and dynamic.

// Variables and Types
var userAge = 19;
var UserName = "Pragkya";
console.log(userAge,UserName);

// Comments in JavaScript
/*
This function takes a user's name as input
and returns a greeting message. 
We will later call this function with a sample name.
*/

// Operations
var a=40;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Data Types
var a=10;
var b="hello";
var c=true;
var d= ["red","blue"];
console.log(a,b,c,d);

// Functions in JavaScript
function greetUser(name) {
    return("hello "+name + " Good Morning!!");
}
console.log( greetUser("pragkya"));

// if Else in JavaScript

var temp=120;
if (temp>30) {
    console.log("temperature is greater than 30");
} else {
    console.log("temperature is less than 30");
}

// FOR LOOP
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

// Loose vs Strict Equality
console.log(5=="5");
console.log(5==="5");


