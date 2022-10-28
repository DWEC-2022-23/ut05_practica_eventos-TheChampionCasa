function tripleNumero(){

    var numeroOriginal, numeroTriple;

    numeroOriginal=document.getElementById("numero").textContent;

    numeroTriple=numeroOriginal*3;

    document.getElementById('enlazar').style.display="none";

    document.getElementById("numero").innerHTML=numeroTriple;
}
