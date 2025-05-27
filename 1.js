
/*
//1

//2
document.getElementById("hi") .innerHTML = ("helow javaScript From Js file").style.color="blue";

//Some Vars
var x = 10,
    y = 20,
    z = 30;

if (x + y === 30) {

    console.log("God");

} else {

    console.log("Error");

}
*/
/*
var x = 200,
    v = 900,
    n = 400;

document.getElementById("one1").innerHTML = x - n + 1;
document.getElementById("one2").innerHTML = x - n + 2;
document.getElementById("one3").innerHTML = x - n + 100;

*/
// var test = true;

// if (test === true){

//     var num = 100;

// } else {

//     var num = 0;

// }

// document.getElementById("one1").innerHTML = num;

// var socalNames = [1 , 2 , 3];
// document.getElementById("one1").innerHTML = socalNames[2];

// var socalNames = {name : "Fares", year : 15};
// document.getElementById("one1").innerHTML = socalNames.name;

// var myName = "Farse"
//     myDiv = document.getElementById("one1");

// alert (myDiv.innerHTML);

// var faresName = 1;

// alert (faresName++)

/*
var yourAge = prompt("Enter your Age : ");
if (yourAge < 18){

    document.getElementById("one1").innerHTML = ("YOUR AGE IS SMALL "+ yourAge);

} else {

    document.getElementById("one1").innerHTML = ("❤ "+ yourAge);

}

*/
/*
function seyHi(){

    alert("HI");

}
seyHi();

*/
/*
function seyHi(){

    alert("HI");

    var name = "Fares",
        age = 20;

    return (name +" "+ age);
}
document.getElementById("one1").innerHTML = seyHi();
*/

/*
function seyHi(name){




    return name +" Hi";
}
document.getElementById("one1").innerHTML = seyHi("fares");
*/
/*
function seyHi(name){




    return name +" Hi";
}
var nameF = prompt("What is Ypur Name ?");
document.getElementById("one1").innerHTML = seyHi(Math.random());
*/

/*
(function seyHi(name){
alert("Welcome !");
})();
*/


/*
function test(){
    var doler = document.getElementById("H").value;
    document.getElementById("massage").innerHTML = "Your Text is : "+ doler +" Thank You !";
}
*/
/*

function test(){

    var doler = document.getElementById("H").value,
        reselt = doler * 500,
        massage = document.getElementById("massage");

        if (doler === ""){

            massage.innerHTML = "😂";

        } else if ( doler === "0" ){

            massage.innerHTML = doler+" Not allwed 😂";

        } else if ( doler < 0){

            massage.innerHTML = doler+" Not allwed to Be Lass then 1";

        } else if ( isNaN(doler) ){

            massage.innerHTML = doler+" is Not a Number 🤦‍♂️";

        } else {

            massage.innerHTML = doler+" IS RUAL YEMENI "+reselt;

        }
}
*/

/*
function Dates(){
var date = document.getElementById("H").value,
    massage = document.getElementById("massage");

switch (date) {

    case "Summer":
        massage.innerHTML = " Summer is Very Hot";
        break;

    case "Winter":
        massage.innerHTML = " Winter is Very Cold";
        break;

    case "Autumn":
        massage.innerHTML = " Autumn is Very Nice";
        break;

    case "Spring":
        massage.innerHTML = " Spring is Very Good";
        break;

    default:
        massage.innerHTML = " Pleas Enter Corct Season!";
        break;

}
}
*/
/*
window.ondblclick = function testParent(){

    var myLastName = "Atif";

    function tsetChild(){

        var mySecondName = " Ahmed ";
        var myTowName = mySecondName + myLastName;

        function testGrind(){

            var myName = "Fares";
            var myTheardName = myName + myTowName;
            console.log(myTheardName);


        }
        testGrind();

    }
    tsetChild();

}
testParent ();
*/

// //onkeyup
// onkeydown
// onkeypress
/*
var text = document.getElementById("H"),

    massage = document.getElementById("massage"),

    go = document.getElementById("Go");


go.onclick = function (){

    massage.innerHTML = text.value *500; 

}
*/

/*
var text = document.getElementById("H"),

    massage = document.getElementById("massage");




text.onkeyup = function (){

    massage.innerHTML = text.value *500; 

}
    */


/*
var text = document.getElementById("H"),

    massage = document.getElementById("massage"),

    select = document.getElementById("Select");




select.onchange,onkeyup = function (){

    massage.innerHTML = text.value * select.value; 

}
*/




// var frineds = ["Fares","Ahmed","Atif"];
// console.log(frineds);


// if ( Array.isArray(frineds) ){

//     console.log("Good ,This is Array");

// } else {

//     console.log("No, It is Not Array");

// }

// console.log(frineds.length);//طول المصفوفه

// frineds.length = 2;

// console.log(frineds);

// frineds = frineds.toString();

// console.log(frineds);

// frineds = frineds.toLocaleString();

// console.log(frineds);

// //

// var myDate = new Date(),
//     myStringDate = myDate.toString(),
//     myLocilDate = myDate.toLocaleString();

//     console.log(myStringDate);
//     console.log(myLocilDate);
//     console.log(myDate);

// console.log(frineds);


var farisArry = [

    "Fares",
    "Mohammed",
    "Abbod",
    "Ali"

];

console.log(farisArry.length);

console.log(farisArry);

console.log(farisArry.length);

farisArry[farisArry.length] = "Atif";

console.log(farisArry);

console.log(farisArry.length);

farisArry.push("Asta");//push

console.log(farisArry);

console.log(farisArry.length);

farisArry.unshift("yono");//unshift

console.log(farisArry);

console.log(farisArry.length);

/* 
arryName.splice(index, How Many, Item1,Item2,Item3);
*/

farisArry.splice(2,2); //farisArry.splice(2,0,"sssss");

console.log(farisArry);

farisArry.pop();

console.log(farisArry);

var lastItem = farisArry.pop();

console.log(lastItem);

var lastItem1 = farisArry.shift();

console.log(lastItem1);

console.log(farisArry);

//

farisArry.sort();

console.log(farisArry);

farisArry.reverse();

console.log(farisArry);

var farisArry2 = [

    "Fares",
    "Mohammed",
    "Abod",
    "Ali"

];

console.log(farisArry2);

var mySlicedArray = farisArry2.slice(1,3);

console.log(mySlicedArray);

var mySlicedArray2 = farisArry2.slice(-3,-1);

console.log(mySlicedArray2);

var otherFriends = [

    "Asta",
    "Yami",
    "Yono",
    "Shika"

];

var workFriends = [

    "As",
    "Ya",
    "Yo",
    "Shi"

];

var allFriends = farisArry2.concat(otherFriends , workFriends );

console.log(allFriends);

var spicalFriend = farisArry2.indexOf("Ali");

console.log(spicalFriend);

console.log(farisArry2[spicalFriend]

);

document.getElementById("one3").innerHTML = "Your Array is " +"<span style='color:red'>"+ allFriends.join(" ");+"</span>";

// document.getElementById("one4").innerHTML = "Your Spical Array is " +"<span style='color:black'>"+ farisArry2[spicalFriend]+"</span>";

var spicalTow = farisArry2.indexOf("Abod");



document.getElementById("one4").innerHTML = "Your Spical Array is " +"<span style='color:black'>"+ farisArry2[spicalTow] +"</span>";


//End of Array
