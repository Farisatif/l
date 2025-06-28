let name1 = "fARES";
let num = [1, -10 ,-20 ,15, 100, -30];
let numname = "F12a3r43e45ss";


//////////////////////////////////////
let allName = name1.split("").map(function(el){

    return el === el.toUpperCase() ? el.toLocaleLowerCase() :el.toUpperCase();

}).join("");

console.log(allName);

//////////////////////////////////////

let exnum = num.map(
    function (ele){
        return -ele;
    });
console.log(exnum); 

/////////////////////////////////////////

let exnumname = numname.split("").map(
    function (ele){
return isNaN(parseInt(ele)) ? ele : "" ;
    }).join("");
    console.log(exnumname);

let exname = name1.split("").map(
    function (ele){
        return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
    }
).join("");

console.log(exname);

////////////////////////////////////////

const mix = "i7 l7O8V088E M0Y lA9PT8OP";

let exMix = mix.split("").map(function(ele){
    
return isNaN(parseInt(ele)) ? ele : "" ;
    
}).map(
    function (ele) {
                return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
    }
).join("");
document.getElementById("year").innerHTML = exMix;
console.log(exMix);

////////////////////////////////////////

let number = [12 , 13 , 14 , 15 , 16];

let number1 = number.map(function (params) {
    return params + params;
})

console.log(number1);

/////////////////////////////////////////

let number4 = ["Ahmed","Ali","Fares"];

let number3 = number4.filter(function (params) {
    return params.startsWith("A")
})
console.log(number3);

//////////////////////////////////////////

let number5 = number.filter(function (params) {
  
    return params % 2 === 0;

    // option = params % 2 === 0 ? true : false; 

})

console.log(number5);

////////////////////////////////////////////

const falter = mix.split("").map(function (params) {
    
    return isNaN(parseInt(params)) ?params:"";

}).map(function (param) {
    
    return param === param.toUpperCase() ? param.toLowerCase() : param.toUpperCase();

}).join("").split(" ").filter(function (params) {
    return params.length <= 4;
});

console.log(falter);

////////////////////////////////////////////

let lap = "A1B2C3D4";

let testLap = lap.split("").filter(function (params) {
  
    return !isNaN(parseInt(params));

}).map(function (params) {
    
    return params * params;

})
console.log(testLap);

/////////////////////////////////////////////

let testRuduce = [10 , 12 , 13 , 14 ,15];

let add = testRuduce.reduce(function (acc  , current , index ,arr) {
    
    console.log("This is acc = "+ acc)
    console.log("This is current = "+ current)
    console.log("This is index = "+ index)
    console.log("This is arr = "+ arr)
    console.log(acc + current)

    console.log("####################")

    return acc + current;
},10)

console.log(add)
///////////////////////////////////////////////

let Qution = ["F","@","A","@","R","@","E","@","S"];

let testQution = Qution.filter(function (params) {
    
    return !params.startsWith("@");

}).reduce(function (acc , current) {

    return `${acc}${current}`;

}).toLowerCase()
console.log(testQution)

///////////////////////////////////////////////

let allDivs = document.querySelectorAll(".content div")
let allList = document.querySelectorAll("ul li")
allList.forEach(function (params) {
    console.log(params)//or with innerHTML

    params.onclick = function () {

        allList.forEach(function(params){
            params.classList.remove("active")

        })
        allDivs.forEach(function(params){
            params.style.display = "none"
        })

        this.classList.add("active")
        // console.log(this.innerHTML)

    }
})

//////////////////////////////////////////////

const Fares = {
    userName : "Fares",
    passwerd : 123456,

    sayHallo : function () {
        return `Hi Fares`
    }
}
var all;

for(all in Fares){


        console.log(all+" : "+Fares[all])



}
console.log(Fares.userName)
console.log(Fares.passwerd)
console.log(sayHallo())
