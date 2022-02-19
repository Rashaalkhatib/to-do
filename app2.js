'use strict';


function check{
    var age = prompt("is your age less than 25?");
    while (age != "yes" && age != "no") {
        var age = prompt("is your age less than 25?");
    }

    var Gender = prompt("are you female?");
    while (Gender != "yes" && Gender != "no") {
        var Gender = prompt("are you female?");
    }
    var jop = prompt("are you  adeveloper?");
    while (jop != "yes" && jop != "no") {
        var jop = prompt("are you  adeveloper?");
    }
}
arraypush{
    var arr[]
    arr.arraypush(age);
    arr.arraypush(Gender);
    arr.arraypush(jop);
}
fuction print{
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}



}
check();
arraypush();
print();