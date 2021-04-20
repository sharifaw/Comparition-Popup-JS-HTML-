let value1= +(prompt("First Value", )) || 0;
let value2= +(prompt("Second Value",)) || 0;
if (value1 > value2 || value2>value1){
    
    alert ("The larger number is "+(value1 > value2 ? value1 : value2));
}
else if (value1 == value2 && value1 != 0){
    alert ("The numbers are equal");
}
else{
    alert(0);
}