let imgUrl = "/ProyectoCanvas/Recursos/3.png";


function seleccionarImagen(event){
   // console.log(event.target.files[0]);

    if(event.target.files[0] && event.target.files[0].type === "png"){
        console.log("Se selecciono una imagen en png");
        
        const imagen = document.querySelector("#img-seleccion");
        const lector = new FileReader();
        
        lector.onload = (event) => {
            imgUrl = event.target.result;
            imagen.style.backgroundImage = "url("+imgUrl+")";
            
            console.log(imgUrl);
        }
        lector.readAsDataURL(event.targe.files[0]);
    }
    else{
        const imagen = document.querySelector("#img-seleccion");
        imgUrl = "/ProyectoCanvas/Recursos/4.png";
        imagen.style.backgroundImage="url("+imgUrl+")";
    }
}