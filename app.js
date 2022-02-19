'use strict';



var uName = prompt("ener your name");
var uGender = prompt("ener your gender");
var uAge = prompt("ener your age");
if (uAge <= 0) {
    alert("the age is less than or equal to zero")
}
var skip = confirm("do you want to skip the welcoming massage")
console.log((skip))
if (skip == false) {

    if (uGender == "male") {
        alert("welcom Mr" + uName)
    }
    else if
        (uGender == "female") {
        alert("welcome Ms" + uName)
    }
    else {
        alert("welcome " + uName)
    }