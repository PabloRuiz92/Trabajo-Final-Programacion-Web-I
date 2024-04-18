var clickMenuAbrir=document.getElementById("contraido");
var clickMenuCerrar=document.getElementById("desplegado");

clickMenuAbrir.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-50px";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("contraido").style.visibility="hidden";
    document.getElementById("desplegado").style.visibility="visible";
});

clickMenuCerrar.addEventListener("click", ()=>{
    document.getElementById("desplegable").style.top="-60px";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("contraido").style.visibility="visible";
    document.getElementById("desplegado").style.visibility="hidden";
});

var images = [], x = 0;
images[0] = "IMG/imagen1.jpg";
images[1] = "IMG/imagen2.jpg";
images[2] = "IMG/imagen3.jpg";
images[3] = "IMG/imagenInicial.jpg";
setTimeout("cambioImagen()", 5000);

function cambioImagen() {
    var img = document.getElementById("imagen");
    img.src = images[x];
    x++;        
    if(x >= images.length) {
        x = 0;
    } 
    setTimeout("cambioImagen()", 5000);
}