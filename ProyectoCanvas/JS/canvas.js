
var canvas = document.querySelector("#canvas"); //referenciamos el canvas que tenemos en el html
var ctx = canvas.getContext("2d");//con esta funcioan obtenemos el contexto 2d en donde dibujaremos

let cursorX;
let cursorY;

const canvasInicial = ctx.getImageData(0,0,canvas.width, canvas.height);
let historial = [];

let bandera = 0;

let opcion;

let inicialX;
let inicialY;

// const Padre = document.querySelector('.canvas')
// const puntero = document.querySelector('.Puntero')
// const ladoPuntero = TamañoImput
// puntero.style.backgroundImage="url(/ProyectoCanvas/Recursos/Iconos/Circulo.png)"
// puntero.style.width=ladoPuntero+"px"
// puntero.style.height=ladoPuntero+"px"
// Padre.addEventListener('mousemove', (e) => {
// puntero.style.top = (e.pageY-(ladoPuntero+1)) + "px"
// puntero.style.left = (e.pageX-(ladoPuntero+1)) + "px"
// })

var colorInput = document.getElementById("color");
const borrador = "#ffffff";
const defecto = "#000000";
var TamañoImput = document.getElementById("input-rango-g-linea");

const inputImgRango = document.querySelector("#input-rango-img")
    
// window.addEventListener("load", ()=>{
//     ctx.beginPath(); //comenzamos una nueva ruta de dibujo
//     ctx.rect(0,0,200,200); //la funcion rect es la que usamos para dibujar rectangulos, x,y,h,w
//     //mediante los 4 valores indicamos sus cordenadas y tamaño
//     ctx.fillStyle = "#5f6";//le damos color a la figura
//     ctx.fill();
//     ctx.strokeStyle = "#000";//le damos color al borde
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(0,0);
//     ctx.lineTo(250,250);
//     ctx.strokeStyle = "#000";
//     ctx.stroke();
// })

// function dibujarFiguras(event){
//     const cursorX = event.offsetX;
//     const cursorY = event.offsetY;
//     let figura = 0;

//     if(figura === 0) {
//         ctx.beginPath();
//         ctx.fillRect(cursorX-50, cursorY-50, 100, 100);
//         ctx.strokeRect(cursorX-50, cursorY-50, 100, 100);
//     } 
//     else if(figura === 1) {
//         ctx.beginPath();
//         ctx.arc(cursorX,cursorY,50, 0, 2 * Math.PI);
//         ctx.fill();
//         ctx.stroke();
//     }
//     else if(figura === 2){
//         ctx.beginPath();
//         ctx.moveTo(cursorX, cursorY);
//         ctx.lineTo(100,100);
//         ctx.stroke();
//     }
// }
function GuardarCanvas(){
    var ImagenAGuardar = canvas.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream");
    window.location.href=ImagenAGuardar;
}
function CambiarOpcion(valor, event){
    console.log(event.target); //Muestra todos los eventos posibles que podemos usar, cuando agregamos el .target
    if (valor!=opcion){
        opcion=valor;
        event.target.style.backgroundColor='#00000';
    }
    else{
        opcion=4;
        event.target.style.backgroundColor = "transparet";
    }
   
    // const cuadrado = document.querySelector("#figuraCuadrado");
    // if(cuadrado.checked){
    //     opcion = 3;
    //     console.log("cuadrado")
    // }else{
    //     opcion = 4;
    // }
}

function dibujarFiguras(event){
    cursorX = event.offsetX;
    cursorY = event.offsetY;
    

    if(opcion === 0) {
  
  

        ctx.beginPath();
        ctx.fillRect(cursorX-50, cursorY-50, 100, 100);
        ctx.strokeRect(cursorX-50, cursorY-50, 100, 100);
    } 
    else if(opcion === 1) {
        ctx.beginPath();
        ctx.arc(cursorX,cursorY,50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    else if(opcion === 2){
        ctx.beginPath();
        ctx.moveTo(cursorX, cursorY);
        ctx.lineTo(100,100);
        ctx.stroke();
    }
    else if(opcion===3){
        let imgReferencia = new Image();
        imgReferencia.src = imgUrl; //imgUrl
    
        imgReferencia.onload = () =>{
            let imgX = (imgReferencia.width*inputImgRango.value)/100;
            let imgY = (imgReferencia.height*inputImgRango.value)/100;
    
            ctx.drawImage(imgReferencia,0, 0, imgReferencia.width, imgReferencia.height, cursorX-(imgX/2), cursorY-(imgY/2), imgX, imgY)
        }
    
    }
    
    else if (opcion===4){
        colorInput.value=borrador;
    }
    else if (opcion===5){
        colorInput.value=defecto;
    }
    else if (opcion===6){
        dibujarFiguras(event);
    }
}




function clickInicial(event){
    inicialX = event.offsetX;
    inicialY = event.offsetY;

    dibujar(inicialX, inicialY);

    bandera = 1;
}

function dibujar(cursorX, cursorY){
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(inicialX, inicialY);
    ctx.lineTo(cursorX, cursorY);
    ctx.stroke();
    ctx.strokeStyle = colorInput.value;
    ctx.lineWidth = TamañoImput.value;
    

    inicialX = cursorX;
    inicialY = cursorY;
}

function presionando(event){
    if(bandera === 1){
        dibujar(event.offsetX, event.offsetY);
    }
}

function levantarCursor(){
    bandera = 0;
    historial.push(ctx.getImageData(0,0,canvas.width, canvas.height));
    console.log(historial.length);
}

function fuera(){
    bandera = 0;
}

function deshacer(){
    console.log(historial.length);

    let canvasPrevio = historial.pop();
    ctx.putImageData(canvasPrevio,0,0);

    if(historial.length <= 0){
        historial.push(ctx.getImageData(0,0,canvas.width, canvas.height));
        ctx.putImageData(canvasInicial,0,0);
    }
}

function borrar(){
    ctx.putImageData(canvasInicial,0,0);
}

function dibujarImagen(cursorX, cursorY){

    
}

function cargarImagen(event){
    const imagen = document.querySelector("#archivo");
    console.log(imagen.files);
    
    ///dibujarImagen(imagen.value);
}


