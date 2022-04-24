//cubes
let cubes = document.querySelectorAll(".cubes");

//input values
let color = "red";
let size = 16;
let heightAndWidth = "";

//change input values
    //change color
    let colorPicker = document.getElementById("colorpicker");
    colorPicker.addEventListener("change", () => {
        color = colorPicker.value
    })

    //change size
    let popup = document.getElementById("popup");
    let ok = document.getElementById("ok");
    let resizeButton = document.getElementById("resize");
    resizeButton.addEventListener("click", () => {
        popup.style.display = "flex";
    });
    ok.addEventListener("click", () => {
            popup.style.display = "none";
            deleteCubes();
            newSize()
            clacHW();
            createCubes();
            cubes = document.querySelectorAll(".cubes");
            cubes.forEach(cube => { cube.addEventListener("mouseover", e => {
                e.target.style.cssText = `background-color: ${color}; height: ${heightAndWidth}; width: ${heightAndWidth};`
            })});
    })
        //deletes existing cubes
        function deleteCubes() {
            for(let i = 1; i < size * size + 1; i++) {
                let cube = document.getElementById(`cube${i}`);
                mainCont.removeChild(cube);
            }
        }

        //resize
        function newSize(){
            size = document.getElementById("newsize").value;
            return size; 
        }

    //reset cube backgrounds
    let clear = document.getElementById("clear");
    clear.addEventListener("click", () => {
        cubes.forEach(cube => {
            clacHW();
            cube.style.cssText = `background-color: rgb(85, 83, 83); height: ${heightAndWidth}; width: ${heightAndWidth};`;
        })
    })

//body
const body = document.querySelector("#body");

//container where the grid goes
const mainCont = document.createElement("div");
mainCont.id = "mainCont";
body.appendChild(mainCont);

//calc height and width
function clacHW(){
    heightAndWidth = 960/size + "px";
    return heightAndWidth;
};

clacHW();

//grid
function createCubes(){
    for(let i = 1; i < size * size + 1; i++) {
        let cube = document.createElement("div");
        cube.id = `cube${i}`;
        cube.style.height = heightAndWidth;
        cube.style.width = heightAndWidth;
        cube.classList.add("cubes");
        mainCont.appendChild(cube);
    };
};

createCubes();

//change color on hover 
cubes = document.querySelectorAll(".cubes");
cubes.forEach(cube => { cube.addEventListener("mouseover", e => {
    e.target.style.cssText = `background-color: ${color}; height: ${heightAndWidth}; width: ${heightAndWidth};`
})});