var LadosPorDado = document.getElementsByTagName("p")[0];
var DanoFinal =  document.getElementsByTagName("p")[1];
var FOGO = document.getElementsByTagName("input")[0];

function PPI() 
{
    let lados = 6;
    LadosPorDado.innerHTML = "";
    for (let i = 1; i <= 6; i++) 
    {
        lados = lados * Rerandom(1, lados);
        LadosPorDado.innerHTML = LadosPorDado.innerHTML + lados;
        if ( i != 6)
        {
            LadosPorDado.innerHTML += " X ";
        }
    }

    DanoFinal.innerHTML = "Dano: " + Rerandom(1, lados);
    document.images[0].src = "ps000020_8.gif";

    FOGO.value = "Lançar novamente";
    //FOGO.onclick = Resetar();
}

function Rerandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function Resetar() 
{
    LadosPorDado.innerHTML = "";
    DanoFinal.innerHTML = "";
    document.images[0].src = "ps000020_3.gif";
    setInterval(FOGO.onclick = PPI(), 5000);
}

//window.Resetar();