//body
const body = document.querySelector("#body");
console.log(body)

//container where the grid goes
const mainCont = document.createElement("div");
mainCont.id = "mainCont";
body.appendChild(mainCont);

//grid
function createCubes(){
    for(let i = 1; i < 257; i++) {
        let cube = document.createElement("div");
        cube.id = `cube${i}`;
        cube.classList.add("cubes");
        mainCont.appendChild(cube);
    };
};

createCubes();