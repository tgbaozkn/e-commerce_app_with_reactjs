const arr = [1,2,3];
const newArr = [0,...arr];
//0,1,2,3
console.log(...newArr);
//0,1,2,3
//seperate operator(...) is for iterables 
//iterables =  strings,array,maps,sets NOT OBJECTS.

const str = "Tugba";
const newStr = [...str," ",".","O"];
//T,u,g,b,a, ,.,O