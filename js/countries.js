const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displyCountries(data))
}


const displyCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
}

// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }

// const getCountryHTML = country => {
//     // option 1
//     const { name, flags } = country;

//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }

//option 2
const getCountryHTML = ({ flags, name, area, region }) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <h3>${region}</h3>
            <p>Area: ${area}<p/>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();