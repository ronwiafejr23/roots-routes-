const form = document.querySelector("#country-form");
const country = document.querySelector("#country");
const countryName = document.querySelector("#country-name");
const capital = document.querySelector("#capital");
const region = document.querySelector("#region");

// J1: Select the subregion and population elements using querySelector.
const subregion = document.querySelector("#subregion");
const population = document.querySelector("#population");
// Part 4 (J10): select the element for the additional detail (flag).
const flag = document.querySelector("#flag");

form.addEventListener("submit", function(event) {
    // J2: Prevent the default form submission.
    event.preventDefault();

    // J3: Retrieve the dropdown value and store it in selectedCountry.
    const selectedCountry = country.value;

    const url = "https://countries.dev/alpha/" + selectedCountry;
    countryName.textContent = "Loading...";

    // J4: Use fetch() to request information from url.
    fetch(url)
        // J5: Parse the response as JSON (and stop if the request failed).
        .then(response => {
            if (!response.ok) {
                throw new Error("Request failed with status " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            countryName.textContent = data.name;

            // J6: Display the capital.
            capital.textContent = data.capital;
            // J7: Display the region.
            region.textContent = data.region;
            // J8: Display the subregion.
            subregion.textContent = data.subregion;
            // J9: Display the population (formatted with commas).
            population.textContent = data.population.toLocaleString();
            // J10: Display your additional detail (Part 4) - the flag emoji.
            flag.textContent = data.flag;
        })
        .catch(error => {
            console.error(error);
            countryName.textContent = "Unable to load country information.";
        });
});
