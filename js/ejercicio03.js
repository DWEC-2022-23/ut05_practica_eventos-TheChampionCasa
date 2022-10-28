var screenLog = document.querySelector('#screenlog');
var key = document.querySelector('#teclado');
document.addEventListener('mousemove',logKey);
document.addEventListener('click',cambiaColor);
document.addEventListener('keydown',teclado);

function logKey(e){
    screenLog.innerText = `
    Navegador: ${e.screenX}, ${e.screenY}
    Pagina: ${e.clientX}, ${e.clientY}`;
    document.getElementById('info').style.backgroundColor = "white";
    document.getElementById('coordenadas').style.display="block";
    document.getElementById('tecladodiv').style.display="none";
}

function cambiaColor(){
    document.getElementById('info').style.backgroundColor = "#FFFFCC";
    document.getElementById('coordenadas').style.display="block";
    document.getElementById('tecladodiv').style.display="none";
}

function teclado(e){
    document.getElementById('info').style.backgroundColor = "#CCE6FF";
    document.getElementById('tecladodiv').style.display="block";
    document.getElementById('coordenadas').style.display="none";
    key.textContent=`Letra o carácter ${"["+e.key+"]"}
    Código ${"["+e.keyCode+"]"}`;
    //key.textContent=`Código ${"["+e.keyCode+"]"}`;
}

