var mySting = "I Love Wiht Someone , And Someone in Love With Someone >>",

    myWord = mySting.indexOf("Love",22),

    mySpicalWord = mySting.search(/loVe/i),

    myEndWord = mySting.lastIndexOf("Love");

console.log(myWord);

console.log(mySpicalWord);;

console.log(myEndWord);

console.log(mySting.split(" "));

console.log(mySting.slice(0,9));//يبدا ويمشي قدااام

console.log(mySting.substr(7,1));// قدك داري عكس ال slice

console.log(mySting.substring(0,7));

console.log(mySting.charAt(2));

console.log(mySting.charCodeAt(2));

console.log(mySting.replace(/LovE/ig, "Like"));

var anyName = String.fromCharCode(70,97,114,101,115);

console.log(anyName);

console.log("Hi I am Fares" .toLowerCase());

console.log("      Hi I am Fares" .toUpperCase());

console.log("         Hi I am Fares      " .trim());

var fares = "Hi I am Fares" ;

document.getElementById("message").innerHTML=fares.link("www.;'kpuoug");

console.log(fares.link("www.google.com"));

var myNumber = 12000000;

var mySpicalNumber = myNumber.toString().replace(/0/g,1).split("");

console.log(myNumber);

console.log(mySpicalNumber);

var fares = "Fares",

    myName = fares.split("");
    
var i;
    for (i = 0; i < myName.length; i++){
        console.log(myName[i].charCodeAt());
    
    }


console.log();

console.log();
