const Base_Url = '';

const dropdowns = document.querySelectorAll(".dropdown select");



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
    let newsrc = `` 
}
