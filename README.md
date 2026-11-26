# Roots & Routes — Lab 5

A travel and cultural exploration website. Choose a country from the dropdown and the page uses `fetch()` to get data from the [countries.dev](https://countries.dev/docs) API and show it on the page without reloading.

**Endpoint used:** `https://countries.dev/alpha/{code}` (for example `https://countries.dev/alpha/GH`). No API key is needed.

## Part 1: API exploration
1. **Response structure:** The response is a **single object**, not an array. It is a flat object whose properties (name, capital, region, and so on) are read directly, which is why the code can use data.name with no index.
2. **Country name expression:** `data.name`
3. **Capital expression:** `data.capital` (the capital is a plain string, not an array, so no `[0]` is needed)
4. **Additional property:** `flag`, the country's flag emoji, which the website did not display at the start. (The response also includes properties such as `currencies` and `languages`.)

## Part 2: HTML
- **TODO H1:** added <p>Subregion: <span id="subregion"></span></p>
- **TODO H2:** added <p>Population: <span id="population"></span></p>
- Empty <span> elements with unique IDs are placeholders that JavaScript fills in with API data.

## Part 3: JavaScript (J1–J9)
| TODO | What I did |
| --- | --- |
| J1 | Selected #subregion and #population with querySelector |
| J2 | Called event.preventDefault() so the form does not reload the page |
| J3 | Stored the dropdown value in selectedCountry (country.value) |
| J4 | Used fetch(url) to request the country data |
| J5 | Added a .then() that checks the response succeeded and returns response.json() |
| J6–J9 | Displayed the capital, region, subregion and population (formatted with toLocaleString()) |

## Part 4: Testing
| Country | Result / issues |
| --- | --- |
| Ghana (GH) | Loaded correctly. Showed the name, capital (Accra), region, subregion, population and flag. No console errors. |
| Jamaica (JM) | Loaded correctly. Showed the name, capital (Kingston), region, subregion, population and flag. No console errors. |
| Brazil (BR) | Loaded correctly. Showed the name, capital (Brasília), region, subregion, population and flag. No console errors. |

**Issue found while testing:** if a request fails (for example a bad country code), the API returns an error instead of country data. I added a check in J5 (response.ok) so the page shows "Unable to load country information." instead of "undefined".

**Additional detail implemented:** the country's **flag**. Added <p>Flag: <span id="flag"></span></p> in index.html (H3), selected #flag in script.js, and set flag.textContent = data.flag (J10).


