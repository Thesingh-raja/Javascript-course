"use strict";
// 1) understanding the problem
//array transformed to string seperated by ...
//what is x days? index+1

//2) breaking up into sub problems
//transform array into string
// transform each element to string in °C

//strings need to contain day (index+1)
//add ... between elements and start and end of string
const data1 = [17, 21, 23];
console.log(`...${data1[0]}°C...${data1[1]}°C...${data1[2]}°C...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log(`...` + str);
};
printForecast(data1);
