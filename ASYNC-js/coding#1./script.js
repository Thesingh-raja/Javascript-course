'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


//first AJAX call
const renderCountry =function(data,className='')
{
    const html =`<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`
  countriesContainer.insertAdjacentHTML('beforeend',html)
}

const renderError = function(err)
{
    countriesContainer.insertAdjacentText('beforeend',err)

}
///////////////////////////////////////




const getCountryData=function(country){
    //country 1
    fetch (`https://restcountries.com/v2/name/${country}`).then(response=>
    { 
        console.log(response);


        if(!response.ok)
        {
            throw new Error(`Country not found ${response.status}`)
        }
        return response.json()
    })
    .then(data=>
        {renderCountry(data[0])
            console.log(data)
        const neighbour = data[0].borders[0]
        // const neighbour = 'dfdfdfdf'
        if (!neighbour) return;
        console.log(neighbour)
        //country 2

       return  fetch(`https://restcountries.com/v2/name/${neighbour}`)
       .then(response=>
        {
            console.log(response)
            if(!response.ok)
            {
                throw new Error(`Country not found ${response.status}`)
            }
            return response.json()
        })
       .then(data=>{renderCountry(data[0],'neighbour')
       


       
})}).catch(err=>{console.error(`${err}`);
renderError(`something went wrong ${err.message}`)
}).finally(()=> 
countriesContainer.style.opacity=1
)
}



btn.addEventListener('click',function()
{

    // getCountryData('portugal')
    getCountryData('')
})





//////
const whereAmI = function (lat,lng)
{
fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
.then(response=> {console.log(response)
    if(!response.ok)
    {
        throw new Error(`Problem with geocoding ${response.status}`)
    }
return response.json()})
.then(data=> {
    console.log(data)
    console.log(`You are in ${data.city},${data.country}`);
return fetch (`https://restcountries.com/v2/name/${data.country}`)

}).then(res=>{
    if (!res.ok) throw new Error(`Country not found (${res.status})`);

    return res.json();

}).then(data=>renderCountry(data[0])).catch(err=>console.error(`${err.message}👎`))
}
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)
