const Base_Url = '';

const dropdowns = document.querySelector(".dropdown select");



// for(let select of dropdowns){
    for(currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        select.append(newoption);
    }

// }

