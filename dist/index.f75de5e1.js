AOS.init();
const dataDoEvento = new Date("sep 3, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / 86400000);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % 86400000 / 3600000);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % 3600000 / 60000);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % 60000 / 1000);
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
