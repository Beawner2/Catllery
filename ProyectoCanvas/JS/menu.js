const txtImgRange = document.querySelector("#lbl-rango-img");
const txtGrozorLinea= document.getElementById("lbl-rango-g-linea");
const inputLineaGrosor=document.getElementById("input-rango-g-linea");
const inputImgRange=document.querySelector("#input-rango-img");

window.onload = () => {
    txtImgRango();
    cambiarValor();
}

function txtImgRango(){
    txtImgRange.innerHTML=inputImgRange.value;
}
function cambiarValor(){
    txtGrozorLinea.innerHTML=inputLineaGrosor.value;
}
