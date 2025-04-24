const containerDiv = document.querySelector(".container")
const newGridButton = document.querySelector("#newGridButton")
// get the container width
const containerPosiition = containerDiv.getBoundingClientRect()
const containerWidth = Math.floor(containerPosiition.width)

console.log(containerWidth);

function drawGrid(gridSquareNumber){
    containerDiv.innerHTML = ""
    for(let i = 0; i <(gridSquareNumber**2);i++){
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("square")
        gridSquare.style.width = ((containerWidth/gridSquareNumber)-2) +"px"
        gridSquare.style.height = ((containerWidth/gridSquareNumber)-2)+"px"
        gridSquare.addEventListener("mouseenter", (e)=>{
            e.target.style.backgroundColor ="black"
        })
        //console.log(gridSquare.style.width);
        containerDiv.appendChild(gridSquare)
    }

}

drawGrid(16);

newGridButton.addEventListener("click", (e) => {
    const gridSquareNumber = +prompt("Enter Side Square Number:")
    if(!gridSquareNumber){
        return
    }
    if(isNaN(gridSquareNumber)){
        alert("Invalid Input!")
        return
    }
    if(gridSquareNumber > 100){
        alert("The value must be less than a 100!")
        return
    }
    drawGrid(gridSquareNumber)

})


