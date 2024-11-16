const imgDrag= document.querySelector ("#img-drag");
let dropimg = new Image();

imgDrag.addEventListener('dragstart', (e) =>{
    console.log("drag star");
    dropimg.src = event.target.src;

    console.log("");
} )

imgDrag.addEventListener('drag', (e)=>{
    //console.log("drag");
})

imgDrag.addEventListener('dragend', (e)=>{
    console.log("Drag end");
})

//Estos tres son para el elementos que se esta arrastrando 

canvas.addEventListener('dragenter',(e)=>{
    console.log("Entro un elemento dentro del canvas");
})

canvas.addEventListener('dragleave',(e)=>{
    console.log("Salio un elemento fuera del canvas");
})

canvas.addEventListener('dragover',(e)=>{
   // console.log("Hay un elemento dentro del canvas");
    event.preventDefault();
    cursorX = event.offsetX;
    cursorY = event.offsetY;

    console.log(cursorX+" - "+cursorY);
})

canvas.addEventListener("drop", (e)=>{
    console.log("drop");
    ctx.drawImage(dropimg,0,0,dropimg.width, dropimg.height, cursorX-(dropimg.width/2), cursorY-(dropimg.height/2), dropimg.width, dropimg.height);
})