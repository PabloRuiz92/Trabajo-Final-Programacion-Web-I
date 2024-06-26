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

var btnCompraOn1=document.getElementById("btnCompra1");
var numero1 = 0;
var contador1 = document.getElementById('contador1');

function aumentar1() {
  numero1++;
  contador1.textContent = numero1;
  activar1();
}

function disminuir1() {
  if (numero1 > 0) {
    numero1--;
    contador1.textContent = numero1;
    activar1();
  }
}

function activar1(){
    if (numero1 > 0) {
        btnCompraOn1.disabled = false;
    } else {
        btnCompraOn1.disabled = true;
    }
}

var btnCompraOn2=document.getElementById("btnCompra2");
var numero2 = 0;
var contador2 = document.getElementById('contador2');

function aumentar2() {
  numero2++;
  contador2.textContent = numero2;
  activar2();
}

function disminuir2() {
  if (numero2 > 0) {
    numero2--;
    contador2.textContent = numero2;
    activar2();
  }
}

function activar2(){
    if (numero2 > 0) {
        btnCompraOn2.disabled = false;
    } else {
        btnCompraOn2.disabled = true;
    }
}

var btnCompraOn3=document.getElementById("btnCompra3");
var numero3 = 0;
var contador3 = document.getElementById('contador3');

function aumentar3() {
  numero3++;
  contador3.textContent = numero3;
  activar3();
}

function disminuir3() {
  if (numero3 > 0) {
    numero3--;
    contador3.textContent = numero3;
    activar3();
  }
}

function activar3(){
    if (numero3 > 0) {
        btnCompraOn3.disabled = false;
    } else {
        btnCompraOn3.disabled = true;
    }
}

var btnCompraOn4=document.getElementById("btnCompra4");
var numero4 = 0;
var contador4 = document.getElementById('contador4');

function aumentar4() {
  numero4++;
  contador4.textContent = numero4;
  activar4();
}

function disminuir4() {
  if (numero4 > 0) {
    numero4--;
    contador4.textContent = numero4;
    activar4();
  }
}

function activar4(){
    if (numero4 > 0) {
        btnCompraOn4.disabled = false;
    } else {
        btnCompraOn4.disabled = true;
    }
}

function comprar() {
    alert('¡Gracias por su compra!');
}