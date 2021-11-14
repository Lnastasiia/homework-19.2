


let year = +prompt("Введите год");

if( (year % 4 != 0) || ( (year % 100 == 0) && (year % 400 != 0) ) ){
    console.log("Невисокосный год");
}else{
    console.log("Високосный год");
}


