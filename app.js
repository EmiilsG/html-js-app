console.log("A");


const radiusInput = document.querySelector("?radius");
const functionSelect = document.querySelector("?function");
const submitButton = document.querySelector("?button")
radiusInput.addEventListener("click", onclick);

function onclick(){
    let fRadius = perseInt.valueOf();
    let fFunction = functionSelect.valueOf();

    if(fFunction == "circumference"){
        let result = 2* Math.PI * resultP;
        resultP.innerHTMl = `<p>${result}</p>`
    }

    if(fFunction == "area"){
        let result = Math.pi * radius * radius;
        resultP.innerHTMl = `<p>${result}</p>`
    }
}