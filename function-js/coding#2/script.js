'use strict';
(function () {
    const header = document.querySelector('h1'); header.style.color = 'red';
    document.querySelector('body').addEventListener('click',function()
    {
        header.style.color='blue';
    })
    })();


    const val = (key, value) => key + key * value;
    console.log(val(100,0.22))

    const duplicate = val.bind(2,3,4, 0.23)
    
    console.log(duplicate(100))