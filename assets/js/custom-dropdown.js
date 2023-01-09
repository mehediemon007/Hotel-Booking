let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

const airports = document.querySelectorAll(".airport-select");

airports.forEach(each => {

    const selectBtn = each.querySelector(".option-select-btn"),
    searchInp = each.querySelector(".option-select-content input"),
    options = each.querySelector(".filter-options-list");

    function addCountry(selectedCountry) {
        options.innerHTML = "";
        countries.forEach(country => {
            let isSelected = country == selectedCountry ? "selected" : "";
            let li = `<li class="${isSelected}">${country}</li>`;
            options.insertAdjacentHTML("beforeend", li);
        });
    }

    addCountry();

    function updateName(selectedLi) {
        searchInp.value = "";
        // addCountry(selectedLi.innerText);
        each.classList.remove("active");
        selectBtn.firstElementChild.innerText = selectedLi.innerText;
    }

    options.querySelectorAll("li").forEach(each => {
        each.addEventListener("click", function(e) {
            updateName(this)
        })
    })

    searchInp.addEventListener("keyup", () => {
        let arr = [];
        let searchWord = searchInp.value.toLowerCase();
        arr = countries.filter(data => {
            return data.toLowerCase().startsWith(searchWord);
        }).map(data => {
            let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
            return `<li class="${isSelected}">${data}</li>`;
        }).join("");
        options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
    });

    selectBtn.addEventListener("click", () => each.classList.toggle("active"));
    
});

// selectBtn = airports.querySelector(".option-select-btn"),
// searchInp = wrapper.querySelector(".option-select-content input"),
// options = wrapper.querySelector(".filter-options");

// let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
//                  "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
//                  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
//                  "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
//                  "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
//                  "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

// function addCountry(selectedCountry) {
//     options.innerHTML = "";
//     countries.forEach(country => {
//         let isSelected = country == selectedCountry ? "selected" : "";
//         let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
//         options.insertAdjacentHTML("beforeend", li);
//     });
// }
// addCountry();

// function updateName(selectedLi) {
//     searchInp.value = "";
//     addCountry(selectedLi.innerText);
//     wrapper.classList.remove("active");
//     selectBtn.firstElementChild.innerText = selectedLi.innerText;
// }

// searchInp.addEventListener("keyup", () => {
//     let arr = [];
//     let searchWord = searchInp.value.toLowerCase();
//     arr = countries.filter(data => {
//         return data.toLowerCase().startsWith(searchWord);
//     }).map(data => {
//         let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
//         return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
//     }).join("");
//     options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
// });

// selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));