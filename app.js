let ContadorTotal = 3599;
let segundos = ContadorTotal;

function timer() {
    let dias = Math.floor(segundos/24/60/60);
    let horasRestantes = Math.floor((segundos) - (dias*86400));
    let horas = Math.floor(horasRestantes/3600);
    let minutosRestantes = Math.floor((horasRestantes) - (horas*3600));
    let minutos = Math.floor(minutosRestantes/60);
    let segundosRestantes = segundos % 60;
   
    if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes; 
    }
    
    document.getElementById('temporizador').innerHTML =  horas + ":" + minutos + ":" + segundosRestantes;
    
    if (segundos == 0) {
        clearInterval(cuentaAtras);
        document.getElementById('temporizador').innerHTML = "Se acabó";
    } else {
        segundos--;
    }
}
let cuentaAtras = setInterval('timer()', 250);