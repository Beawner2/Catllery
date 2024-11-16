function aplicarFiltro(){
    const datosImage = ctx.getImageData(0,0,canvas.width, canvas.height);
    console.log(datosImage);
    //EscalaDeGrises(datosImage.data);

    Negativo(datosImage.data);

    ctx.putImageData(datosImage,0,0);
}
function aplicarFiltro2(){
    const datosImage = ctx.getImageData(0,0,canvas.width, canvas.height);
    console.log(datosImage);
    //EscalaDeGrises(datosImage.data);

    EscalaDeGrises(datosImage.data);

    ctx.putImageData(datosImage,0,0);
}
function aplicarFiltro3(){
    const div = document.getElementById("Lienzo")

    div.style.filter=("brightness(150%)")
   
}
function aplicarFiltro4(){
    const div = document.getElementById("Lienzo")

    div.style.filter=("contrast(150%)")
}

function EscalaDeGrises(datos){
    for (let i = 0; i < datos.length ; i += 4){
        const promedio = (datos[i] + datos[i+1] + datos[i+2])/3;
        datos[i] = datos[i+1] = datos [i+2] = promedio;
    }
    console.log[datos];
}

function Negativo(datos) {
    for (let i = 0; i < datos.length ; i += 4){
        datos [i] = 255 - datos [i];
        datos [i] = 255 - datos [i+1];
        datos [i] = 255 - datos [i+2];
    }
}
function Sepia(datos) {
    for (let i = 0; i < datos.length ; i += 4){
        datos [i] = (datos [i]*0.393)+(datos [i+1]*0.769)+(datos [i+2]*0.498);
        datos [i] = (datos [i]*0.349)+(datos [i+1]*0.686)+(datos [i+2]*0.368);
        datos [i] = (datos [i]*0.272)+(datos [i+1]*0.734)+(datos [i+2]*0.631);
    }
}