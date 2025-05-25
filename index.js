let a=0;
var friend = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
];


function myResalt(){

    var test = document.getElementById("text").value,
        spicalName = friend.indexOf(test);

        if ( test === friend[spicalName]){
    document.getElementById("message").innerHTML = friend[spicalName]+ " is in Array !"; 
    a++;
    console.log(a);
    
} else {
        document.getElementById("message").innerHTML = "Not in Friend Array !"; 

}

}

function addName(){


    var test = document.getElementById("text2").value;
    
friend [friend.length]=test;


        if ( test === ""){
    document.getElementById("message2").innerHTML = " Are You serios ?"; 
    
} else {

        document.getElementById("message2").innerHTML = "Add Scecsfly!";
        friend.forEach(item => {document.getElementById("message2").innerHTML = item});
        

}



}
function date(){
 var myDate = new Date(),
    myString = myDate.toLocaleTimeString();
document.getElementById("my").textContent=myString;
setTimeout(date,1000);
}
window.onload = date;