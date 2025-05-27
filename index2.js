var myCar = {

    color : "Red",
    type : "Marsides",
    year : 2025,
    price : 2000,
    number : 1

};

console.log(myCar.color);

var all;

for(all in myCar){


        console.log(all+" : "+myCar[all])



}


function inPuts(){

    var num = document.getElementById("text").value;
if ( num === "" || num <1700 || isNaN(num) || num === "0"){

    document.getElementById("year").innerHTML = " Are You Animal ?"

} else {

function yearUserName (Start,End){

    var years;

    document.write("<select>");

    for ( years = Start; years <= End; years++){

        document.write('<option value ="'
            +years+
            '" style="color:red;background:black">'
            +years+
            "</option>");

    }

    document.write("</select>");

}


var date = new Date();
var stricDate = date.getFullYear();
console.log(stricDate);

yearUserName(num,stricDate);


}

 


}



