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
        gridSquare.style.opacity = 0.1
        gridSquare.addEventListener("mouseenter", (e)=>{
            const currentOpacity = parseFloat(e.target.style.opacity)+0.1
            e.target.style.opacity = currentOpacity >=1 ? 1:currentOpacity;
            e.target.style.backgroundColor ="black"
            //e.target.style.backgroundColor =`rgb(${randomRBGColumn()},${randomRBGColumn()},${randomRBGColumn()})`
           
        })
        //console.log(gridSquare.style.width);
        containerDiv.appendChild(gridSquare)
    }

}

drawGrid(16);

function randomRBGColumn(){
    return  Math.floor(Math.random()*255) +1
}

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


