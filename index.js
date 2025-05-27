let a = 0;

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


    var test = document.getElementById("text2").value.trim();
    
friend [friend.length]=test;


        if ( test === ""){
    document.getElementById("message2").innerHTML = " Are You surios ?"; 
    
} else {

        friend.push(test);
        document.getElementById("message2").innerHTML = "Add Scecsfly!<br>"+friend.join("<br> ");
        

}

//indexof("value to search",Starting index);كيفيه البحث 
//lastIndexof لفوق 
}
function date(){
 var myDate = new Date(),
    myString = myDate.toLocaleString();
document.getElementById("my").textContent=myString;
setTimeout(date,1000);
}
window.onload = date;



if ( Array.isArray(friend) ){

    console.log("yes , This is Array !");

} else {

    console.log("No , This is not Array !");

}

console.log(friend.length);
console.log(friend);
friend.length = 2;
console.log(friend);

console.log(friend.toLocaleString());
console.log(friend.join(" "));
friend.forEach(item=>console.log(item));
friend.push("mo");//اخر
friend.unshift("fares");//اول
console.log(friend);

friend.splice(0,1);//حذف او اضافه 0 0 "الاسم" ز
console.log(friend);
friend.pop();//حذف اخر عنصر
console.log(friend);
console.log(friend.shift());
console.log(friend.sort());

console.log(friend.slice(0,2));//اخذ جزء من العناصر من المصفوفه

var friend2 = [

"1",
"2"

];

console.log(friend.concat(friend2));

console.log("");

console.log("");

console.log("");