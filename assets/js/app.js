


let year = +prompt("Введите год");

if( !(year % 4) || ( !(year % 100) && (year % 400) ) ){
    console.log("Високосный год");
}else{
    console.log("Невисокосный год");
}


