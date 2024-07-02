const Base_Url = '';

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromcurr = document.querySelector(".from select")
const tocurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")

for(let select of dropdowns){
    for(currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if(select.name === "from" && currcode === "USD"){
            newoption.selected = 'selected'
        }
        if(select.name === "to" && currcode === "INR"){
            newoption.selected = 'selected'
        }
        select.append(newoption);
    }

    select.addEventListener("change",(e)=>{
        updateflag(e.target);
    });

}

const updateflag = (element) => {
    let currcode = element.value
    let countrycode = countryList[currcode]
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png` 
    let img = element.parentElement.querySelector('img')
    img.src = newsrc
}

btn.addEventListener("click", async (e)=>{
    e.preventDefault()
    

})

