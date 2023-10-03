// Input de cant. de cuadrados x * x 
let x; 
// Seleccion del body.
const bodyDocumento = document.querySelector("body");

function ingresoDatos(){
   x = Number(prompt("Ingresa la grilla nxn que desea generar: "));
   if ( x <= 100){
       crearContenedores();
    }
   else if (x > 100) { 
    const advertencia = document.createElement("h1");
    advertencia.innerText = "Ha seleccionado valores muy grandes, el maximo permitido es de 10x10";
    bodyDocumento.appendChild(advertencia);
}
else {
    const advertencia = document.createElement("h1");
    advertencia.innerText = "Error en el ingreso de datos";
    bodyDocumento.appendChild(advertencia);
}
}

function randomColor(){
    const colorName = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "gray","white"];
    let randonNumber = Math.floor(Math.random() *11);
   return colorName[randonNumber];
}
function crearContenedores(){
    //Contenedor Padre:
    const contenedor = document.createElement("div");
    bodyDocumento.appendChild(contenedor);
    contenedor.style.cssText = "height:600px; margin:10px auto; display:flex; justify-content:strech;  gap: 2px     ; flex-wrap: wrap; align-content: flex-start;"
    //Childs: 
    for (let j = 0; j < x; j++){ 
        for (let i = 0; i < x; i++){
            const caja = document.createElement("div");
            caja.textContent = `#${i}`;
            caja.style.cssText = "background-color: black; width:50px; height: 50px;";
            contenedor.appendChild(caja);
            
            // Al pasar el cursor por encima:

            caja.addEventListener("mouseover", () => {
            caja.style.backgroundColor = randomColor();
            caja.style.color = "white";
            });
        
            // Al sacar el cursor de encima: 
            caja.addEventListener("mouseout", () => {
                caja.style.backgroundColor = randomColor();
                });
        
        }
    }
}

/*
//Random Color  





*/




//Anotaciones: 
//flex-basis:120px
/*
//Childs: 
for (let j = 0; j < 16; j++){ 
    for (let i = 0; i < 16; i++){
        const caja = document.createElement("div");
        caja.textContent = `${i}`
        caja.style.cssText = "background-color: yellow; width:50px; height: 50px;";
        contenedor.appendChild(caja);
    }
}
*/
