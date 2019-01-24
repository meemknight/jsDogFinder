/**
 * Endpoint-uri Dog API:
 * imagine random: https://dog.ceo/api/breeds/image/random
 * toate rasele: https://dog.ceo/api/breeds/list
 * imagine random dintr-o rasa anume: https://dog.ceo/api/breed/{hound}/images/random
 */

// ------------------------------------------
//  Referinte la Elementele HTML pe care le vom folosi in cod
// ------------------------------------------

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');
const submit = document.getElementById('submit');
let image = document.createElement("img");
image = document.createElement("img");
card.appendChild(image); 

function generateImage(str)
{
    image.src = str;
}

function getDogImage(breed)
{ 
    fetchData('https://dog.ceo/api/breed/' + breed + '/images/random');
}

function generateOptions()
{
    fetch('https://dog.ceo/api/breeds/list')
.then(response => response.json())
.then(data => 
{
    let breeds = data.message;
    breeds.forEach(e => 
        {
            let temp = document.createElement("option");
            temp.innerText = e;
            temp.value = e;
            select.appendChild(temp);
        });
}).catch(() => {console.log("log");});

}
// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url)
{
    fetch(url)
    .then(response => response.json())
    .then(data => 
    {
    generateImage(data.message);
    }).catch(() => {console.log("log");});
    
}

fetchData('https://dog.ceo/api/breeds/image/random');
generateOptions();


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener("change", () => 
{
    getDogImage(select.value);
});

card.addEventListener("click", ()=>
{
    getDogImage(select.value);
});

// ------------------------------------------
//  POST DATA
// ------------------------------------------

    form.action = 'Aici e linkul';
    form.method = 'post';



// PAS 9 - Transmiteti datele completate in formular printr-un request POST, catre https://jsonplaceholder.typicode.com/posts 
// Printati in consola raspunsul primit de la server, impreuna cu un mesaj custom.  
