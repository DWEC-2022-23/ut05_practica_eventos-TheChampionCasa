function muestraOculta1() {
    var documento1=document.getElementById('contenidos_1');
    if (documento1.style.display=='none'){
        document.getElementById('contenidos_1').style.display = 'block';
        document.getElementById('enlace_1').innerHTML="Ocultar contenido";
    }else{
        document.getElementById('contenidos_1').style.display='none';
        document.getElementById('enlace_1').innerHTML="Mostrar contenido";
    }
}

function muestraOculta2() {
    var documento2=document.getElementById('contenidos_2');
    if (documento2.style.display=='none'){
        document.getElementById('contenidos_2').style.display = 'block';
        document.getElementById('enlace_2').innerHTML="Ocultar contenido";
    }else{
        document.getElementById('contenidos_2').style.display='none';
        document.getElementById('enlace_2').innerHTML="Mostrar contenido";
    }
}

function muestraOculta3() {
    var documento3=document.getElementById('contenidos_3');
    if (documento3.style.display=='none'){
        document.getElementById('contenidos_3').style.display = 'block';
        document.getElementById('enlace_3').innerHTML="Ocultar contenido";
    }else{
        document.getElementById('contenidos_3').style.display='none';
        document.getElementById('enlace_3').innerHTML="Mostrar contenido";
    }
}
