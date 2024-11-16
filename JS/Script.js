window.onload=function(){
    var Pantalla=document.getElementById("PantallaCarga")
    Pantalla.style.display="block"
    Pantalla.style.animation="CargarPantalla 3s forwards"
    // Pantalla.style.transform="scale(.1)"
    // Pantalla.style.width="50%"
    // Pantalla.style.borderRadius="10000px"
    // Pantalla.style.left="25%"
}
const Observador = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});
const ElementosOcultos = document.querySelectorAll('.Oculto')
ElementosOcultos.forEach((el) => Observador.observe(el));

let DescripcionA1 = document.getElementById("InfA1");
let DescripcionA2 = document.getElementById("InfA2");
let DescripcionA3 = document.getElementById("InfA3");
let DescripcionA4 = document.getElementById("InfA4");
let DescripcionA5 = document.getElementById("InfA5");
let DescripcionA6 = document.getElementById("InfA6");
let DescripcionA7 = document.getElementById("InfA7");
let DescripcionA8 = document.getElementById("InfA8");
let DescripcionA9 = document.getElementById("InfA9");

function MostrarDes(valor){
    if (valor===0){
        DescripcionA1.style=" opacity: 80%"
    }
    else if (valor===1){
        DescripcionA2.style=" opacity: 80%"
    }
    else if (valor===2){
        DescripcionA3.style=" opacity: 80%"
    }
    else if (valor===3){
        DescripcionA4.style=" opacity: 80%"
    }
    else if (valor===4){
        DescripcionA5.style=" opacity: 80%"
    }
    else if (valor===5){
        DescripcionA6.style=" opacity: 80%"
    }
    else if (valor===6){
        DescripcionA7.style=" opacity: 80%"
    }
    else if (valor===7){
        DescripcionA8.style=" opacity: 80%"
    }
    else if (valor===8){
        DescripcionA9.style=" opacity: 80%"
    }
    
}

function OcultarDes(){
    DescripcionA1.style=" opacity: 0"
    DescripcionA2.style=" opacity: 0"
    DescripcionA3.style=" opacity: 0"
    DescripcionA4.style=" opacity: 0"
    DescripcionA5.style=" opacity: 0"
    DescripcionA6.style=" opacity: 0"
    DescripcionA7.style=" opacity: 0"
    DescripcionA8.style=" opacity: 0"
    DescripcionA9.style=" opacity: 0"

}

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('IlusA1');
var modalcontent = document.getElementById("img01");


function EnGrande(valor){
    if(valor===1){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/1630165deb8b880aac50e39c5846c469.jpg"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>Autopurrtrato</p> <P>Roberto Martínez Pérez</P>";
    }
    else if (valor===2){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/1cc369a9bae9ce9d7f802a1c86758a45.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>Plato caído</p> <P>Ana García López</P>";
    }
    else if (valor===3){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/28c0bb196c9c43a3a98e85d99fadd2b2.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>Vinny Van Gogh</p> <P>Javier Rodríguez Sánchez</P>";
    }
    else if (valor===4){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/3af7190ca8ba373de08ac82deee6cc05.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>Disfrutando el sol</p> <P>Elena Martín Gómez</P>";
    }
    else if (valor===5){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/3cb4ab148b3aa826d2592756a1a2997b.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>La traición</p> <P>Pedro López Fernández</P>";
    }
    else if (valor===6){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/bcc8db2ae92e9b165177559330445474.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>Lecturas profundas</p> <P>Laura González Ruiz</P>";
    }
    else if (valor===7){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/dbbf04b44bc462005e7450606ea91fce.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>Necesidad</p> <P>Diego Pérez Hernández</P>";
    }
    else if (valor===8){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/f26a938667ecf0728436b559cc67a66b.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>La ópera</p> <P>Marta Sánchez Díaz</P>";
    }
    else if (valor===9){
        modal.style.display = "flex";
        modal.style.backgroundImage="url(/Img/ffcfbd71929e4645a93c645a400d6aa3.jpg)"
        //modalImg.src = this.src;
        modalcontent.innerHTML = "<p>Hambriento</p> <P>José Ramírez García</P>";
    }
    
    
    
    
    
    
    
    
}
// img.onclick = function(){
  
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


