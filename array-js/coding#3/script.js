'use strict'

const Data1=[5,2,4,1,15,8,3];
const Data2=[16,6,10,5,6,1,4];


const calcAverageHumanAge= data=>data.map(age=>age<=2? 2*age: 16+age*4).filter(age=> age>=18).reduce((acc,age,i,arr)=> acc+age/arr.length,0);
const avg1=calcAverageHumanAge(Data1);
const avg2=calcAverageHumanAge(Data2);
console.log(avg1,avg2);