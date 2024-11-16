Usuarios=[
    {
    "id":1,
    "nombreUsuario":"WERNER",
    "contraseña":"12345",
    "datosPersonales":{
        "urlFoto":"../Img/UsuarioArtista.jpg",
        "Nombre":"Werner Martin Pérez",
        "TipoUsuario":"Artista",
        "Fecha":"Miembro desde: 20 de agosto 2022",
        "Trabajos":"10 trabajos publicados",
        "Descripcion":"Artista multidisciplinario apasionado por explorar las intersecciones entre la naturaleza y la tecnología, fusionando elementos tradicionales con nuevas formas de expresión. Con el uso de mezcla única de colores vibrantes, texturas evocativas y conceptos innovadores, invitando al espectador a reflexionar sobre la belleza y complejidad del mundo que nos rodea.",
        "Acceso":"GaleriaArtistaAcesso.html",
        "AccesoC":"/ProyectoCanvas/Canvas.html",
    }
    
    }, 
    {
    "id":2,
    "nombreUsuario":"ANTONIO",
    "contraseña":"56789",
    "datosPersonales":{
        "urlFoto":"../Img/UsuarioInvitado.jpg",
        "Nombre":"Ismael Diaz Carillop",
        "TipoUsuario":"Invitado",
        "Fecha":"Miembro desde: 10 de marzo 2022",
        "Trabajos":"sin trabajos publicados",
        "Descripcion":"Como amante del arte, siempre busco nuevas formas de expresión artística. Disfruto visitando museos y galerías, y me fascina aprender sobre diferentes artistas y movimientos. Tengo una sensibilidad estética que se refleja en mi vida diaria, ya sea en la decoración de mi hogar o en mis hobbies creativos.",
        "Acceso":"/GaleriaArtista.html",
        "AccesoC":"/ProyectoCanvas/CanvasInvitado.html",    
    }
        
    }
]
let id_usuario;




function validarDatos(event){
    const formulario = document.querySelector ("#formulario");
    const mostrar = document.querySelector ('.contenido');
    const ocultar = document.querySelector ('#formulario');

    formData = new FormData(formulario);
    
    datosFormulario=Object.fromEntries(formData.entries());

    let nombreUsuario = false;
    let contraseña =  false;
    var nombre = datosFormulario.nombreUsuario.toUpperCase();
    
    // console.log(datosFormulario.nombreUsuario.toUpperCase());
    // console.log(nombre);
    datosFormulario.nombreUsuario=nombre;
    
    for (let i=0;i<Usuarios.length; i++){
        if (datosFormulario.nombreUsuario==Usuarios[i].nombreUsuario && 
            datosFormulario.contraseña==Usuarios[i].contraseña)
            {
            console.log(nombreUsuario);
           nombreUsuario = true;
           contraseña=true;
           id_usuario =Usuarios[i].id;
           break;
                // alert("Datos correctos");
        }
        else{
            nombreUsuario=false;
            contraseña=false;
            // alert("Nombre de usuario o contraseña incorrecta");
        }
        
    }
    if (nombreUsuario && contraseña)
    {
       // alert("Datos correctos")
        mostrar.style.display='grid';
        ocultar.style.display='none';
        agregarDatorUsuario(id_usuario)
    }
    else(
        alert ("Nombre de usuario o contraseña incorrectos")
        )
    
    
    // console.log(datosFormulario);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


function agregarDatorUsuario(id){
    let usuario_actual;
    const foto= document.querySelector("#info-foto");
    const nombre= document.querySelector("#info-nombre");
    const cuenta= document.querySelector("#info-cuenta");
    const fecha= document.querySelector("#info-fecha");
    const trabajos= document.querySelector("#info-trabajos");
    const descripcion= document.querySelector("#Galeria");
    var Galeria=document.getElementById("GaleriaL");
    var Canvas=document.getElementById("CanvasL")

    for (let i=0;i<Usuarios.length;i++)
    {
        if(id==Usuarios[i].id){
            usuario_actual= Object.assign({},Usuarios[i]);
        }
    }
    //foto.src='url(${usuario_actual.datosPersonales.urlfoto})'; //sin no se usa backgroud-img
    //foto.style.backgroundimage =`url(${usuario_actual.datosPersonales.urlfoto})`;
    foto.innerHTML=`<img src="${usuario_actual.datosPersonales.urlFoto}" alt="Foto de perfil">`;
    nombre.textContent=usuario_actual.datosPersonales.Nombre;
    cuenta.textContent=usuario_actual.datosPersonales.TipoUsuario;
    fecha.textContent=usuario_actual.datosPersonales.Fecha;
    trabajos.textContent=usuario_actual.datosPersonales.Trabajos;
    //descripcion.textContent=usuario_actual.datosPersonales.Descripcion;
    Galeria.href=usuario_actual.datosPersonales.Acceso;
    Canvas.href=usuario_actual.datosPersonales.AccesoC;

}

function cerrarPantalla(event){
    const mostrar = document.querySelector ('.contenido');
    const foto= document.querySelector("#info-foto");
    foto.style.backgroundimage ='url(${})';
    mostrar.style.display='none';
    

}

