'use strict'

const Data1=[5,2,4,1,15,8,3];
const Data2=[16,6,10,5,6,1,4];
const calcAverageHumanAge = function(ages){
  const humanAges=ages.map(age=>age<=2? 2*age: 16+age*4)
  const adult = humanAges.filter(age=> age>=18);

  const average= adult.reduce((acc,age)=> acc=acc+age)/adult.length;
  return average;
}
const avg1=calcAverageHumanAge(Data1);
const avg2=calcAverageHumanAge(Data2);
console.log(avg1,avg2);