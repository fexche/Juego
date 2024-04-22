// inicilizacion de variables
let tarjetasdestapadas=0;
let tarjeta1=null;
let tarjeta2=null;
let primerResultado=0;
let segundoResultado=0;
let movimientos=0;
let aciertos=0;
let temporizador=false;
let timer=30;
let timerinicial=30;
let tiemporegresivoId=null;

// apuntando a los objetos documento HTML
let mostrarmovimientos=document.getElementById('movimientos');
let mostaraciertos=document.getElementById('acierto');
let mostrartiempo=document.getElementById('t-restante');

// Arreglo
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() -0.5});

console.log(numeros);


function contartiempo() {
tiemporegresivoId = setInterval(() => {
        timer--;
        mostrartiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer==0)
        {
            mostrartiempo.innerHTML=` Lo Siento!  😭 se ha terminado el tiempo ...`;
            clearInterval(tiemporegresivoId);
            bloqueartarjetas();

            // Reiniciar
            setTimeout(()=>{                
                window.location.href = window.location.href;
            },8000);

        }
    }, 1000);    
}

function bloqueartarjetas()
{
    for (let i=0; i<=15; i++)
    {
        let tarjetabloqueada=document.getElementById(i);
        tarjetabloqueada.innerHTML=numeros[i];
        tarjetabloqueada.disabled=true;
    }
}

// Funcion Principal
function destapar(id){

    if (temporizador==false)
    {
        contartiempo();
        temporizador=true;
    }
tarjetasdestapadas++;
console.log(tarjetasdestapadas);

    if (tarjetasdestapadas==1)
    {
        tarjeta1=document.getElementById(id);
        primerResultado=numeros[id];
        tarjeta1.innerHTML=numeros[id];
        tarjeta1.disabled=true;
    } else if(tarjetasdestapadas==2) {
            tarjeta2=document.getElementById(id);
            segundoResultado=numeros[id];
            tarjeta2.innerHTML=segundoResultado;
            tarjeta2.disabled=true;        
            movimientos++        
            mostrarmovimientos.innerHTML = `Movimientos: ${movimientos}`;              
    if(primerResultado==segundoResultado)
    { 
        tarjetasdestapadas=0;
        aciertos++;
        mostaraciertos.innerHTML = `Aciertos: ${aciertos}`;

        // El jugador a ganado
        if(aciertos==8)
        {
            clearInterval(tiemporegresivoId);
            mostaraciertos.innerHTML = `Aciertos: ${aciertos} 🕺💃`;
            mostrartiempo.innerHTML=` Genial! 🎉🎉🎉 Sólo demoraste ${timerinicial-timer} segundos`;
            mostrarmovimientos.innerHTML = `Movimientos: ${movimientos} 🤘 💪`;
        }

    } else {
        setTimeout(()=>{
            tarjeta1.innerHTML=` `;
            tarjeta2.innerHTML=` `;
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
            tarjetasdestapadas=0;
        },800);
    }
 }

}
