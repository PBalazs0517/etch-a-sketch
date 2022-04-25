//general values
let size = "16"
let color = "red"
let bgColor = "rgb(85, 83, 83)";
let randomColor = "";
const resizeLabel = document.getElementById("resizelabel");

//inputs
    //mainrow
        //clear
        let clear = document.getElementById("clear");
        clear.addEventListener("click", () => {
            let cubes = document.querySelectorAll(".cubes");
            cubes.forEach(cube => {
                cube.style.cssText += `background-color: ${bgColor}`
            })
        });

        //resize
        let resize = document.getElementById("resize");
        resize.addEventListener("change", () => {
            deleteGrid();
            size = resize.value;
            resizeLabel.textContent = `${size} X ${size}`
            createGrid();
            return size;
        });

        //colorpicker
        let colorpicker = document.getElementById("colorpicker");
        colorpicker.addEventListener("change", () => {
            color = colorpicker.value;
        });
    
    //toolsrow
    let pencilSelected = true;
    let rubberSelected = false;
    let fillSelected = false;
    let rainbowSelected = false;
        //pencil
        let pencil = document.getElementById("pencil");
        pencil.style.cssText = "border: 3px rgb(29, 36, 248) solid;";
        pencil.addEventListener("click", () => {
            pencilSelected = true;
            rubberSelected = false;
            fillSelected = false;
            rainbowSelected = false;
            pencil.style.cssText = "border: 3px rgb(29, 36, 248) solid;";
            rubber.style.cssText = "border: 3px black solid;";
            fill.style.cssText = "border: 3px black solid;";
            rainbow.style.cssText = "border: 3px black solid;";
            color = colorpicker.value;
        })

        //rubber
        let rubber = document.getElementById("rubber");
        rubber.addEventListener("click", () => {
            pencilSelected = false;
            rubberSelected = true;
            fillSelected = false;
            rainbowSelected = false;
            rubber.style.cssText = "border: 3px rgb(29, 36, 248) solid;";
            pencil.style.cssText = "border: 3px black solid;";
            fill.style.cssText = "border: 3px black solid;";
            rainbow.style.cssText = "border: 3px black solid;";
            color = bgColor;
        })
        //fill
        let fill = document.getElementById("fill");
        fill.addEventListener("click", () => {
            pencilSelected = false;
            rubberSelected = false;
            fillSelected = true;
            rainbowSelected = false;
            fill.style.cssText = "border: 3px rgb(29, 36, 248) solid;";
            rubber.style.cssText = "border: 3px black solid;";
            pencil.style.cssText = "border: 3px black solid;";
            rainbow.style.cssText = "border: 3px black solid;";
            color = colorpicker.value;
            let cubes = document.querySelectorAll(".cubes");
            cubes.forEach(cube => {
                cube.style.cssText += `background-color: ${color}`
            });
        })

        //rainbow
        let rainbow = document.getElementById("rainbow");
        rainbow.addEventListener("click", () => {
            pencilSelected = false;
            rubberSelected = false;
            fillSelected = false;
            rainbowSelected = true;
            rainbow.style.cssText = "border: 3px rgb(29, 36, 248) solid;";
            rubber.style.cssText = "border: 3px black solid;";
            fill.style.cssText = "border: 3px black solid;";
            pencil.style.cssText = "border: 3px black solid;";
            console.log(randomColor);
            color = randomColor;
        })
            //random color
            function randomiseColor() {
                let colorR = Math.floor(Math.random() * 255);
                let colorG = Math.floor(Math.random() * 255);
                let colorB = Math.floor(Math.random() * 255);
                randomColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
                return randomColor;
            }

//body 
let body = document.querySelector("body")

//div where the grid goes
let mainCont = document.createElement("div");
mainCont.id = "mainCont";
mainCont.style.cssText += `background-color: ${bgColor}`;
body.appendChild(mainCont);

//cube's height and width
let heightAndWidth = "";
function calcHW() {
    heightAndWidth = 800/size+"px";
    return heightAndWidth;
}

//create grid
function createGrid() {
    for(let i = 1; i < size*size+1; i++){
        let cube = document.createElement("div");
        cube.id = `cube${i}`;
        cube.classList.add("cubes");
        calcHW();
        cube.style.cssText = `height: ${heightAndWidth}; width: ${heightAndWidth};`;
        cube.addEventListener("mouseover", e => {
            randomiseColor();
            if(rainbowSelected == true){
                e.target.style.cssText += `background-color: ${randomColor};`
            } else { e.target.style.cssText += `background-color: ${color};`}
        })
        mainCont.appendChild(cube)
    }
};

createGrid();

//deletes existing grid 
function deleteGrid() {
    for(let i = 1; i < size*size+1; i++){
        let cube = document.getElementById(`cube${i}`);
        mainCont.removeChild(cube);
    }
}