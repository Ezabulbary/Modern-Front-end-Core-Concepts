const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const allCountries = countries.map(country => getCountriesHtml(country));
    const countriesContainar = document.getElementById('countries');
    countriesContainar.innerHTML = allCountries.join(' ');
}

// option-1
/* const getCountriesHtml = (country) => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
} */

// option-2
/* const getCountriesHtml = (country) => {
    const { name, flags } = country
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
} */

// option-3 
const getCountriesHtml = ({name, flags}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries()