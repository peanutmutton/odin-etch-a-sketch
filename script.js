function addDivs(){
    const container = document.querySelector('#container');
    for(let i=0; i<16; i++){
        const divElem = document.createElement('div');
        divElem.textContent = i+1;
        divElem.style.flex = "1";
        container.appendChild(divElem);
    }
}



//functions:
console.log("Hello World!")

addDivs();