function addDivs(){
    const container = document.querySelector('#container');
    for(let i=0; i<16*16; i++){
        const divElem = document.createElement('div');
        divElem.textContent = "";
        divElem.style.flex = "1 0 0%";
        //divElem.style.minWidth = "100px";
        //divElem.style.height = "100px";
        divElem.style.alignSelf = "auto";



        

        divElem.addEventListener('mouseleave', () => {
            divElem.style.background = "red";
        })

        container.appendChild(divElem);


    }
}

function replaceDivs(){
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let length = window.prompt("Enter the square's length: ");
    for(let i = 0; i < length*length; i++){
        const divElem = document.createElement('div');
        divElem.style.flex = "1 0 0%";
        //divElem.style.minWidth = "100px";
        divElem.style.height = "100px";
        divElem.addEventListener('mouseleave', () => {
            divElem.style.background = "red";
        })

        container.appendChild(divElem);
    }
}

//functions:
console.log("Hello World!")

addDivs();