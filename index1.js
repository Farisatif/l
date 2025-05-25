var mySting = "I Love Wiht Someone , And Someone in Love With Someone >>",

    myWord = mySting.indexOf("Love"),

    mySpicalWord = mySting.search(/loVe/i),

    myEndWord = mySting.lastIndexOf("Love");

console.log(myWord);

console.log(mySpicalWord);;

console.log(myEndWord);

console.log(mySting.split(" "));

console.log(mySting.slice(0,9));//يبدا ويمشي قدااام

console.log(mySting.substr(7,1));// قدك داري عكس ال slice

console.log(mySting.substring(1,7));

console.log(mySting.charAt(2));

console.log(mySting.charCodeAt(2));

console.log(mySting.replace(/LovE/ig, "Like"));





