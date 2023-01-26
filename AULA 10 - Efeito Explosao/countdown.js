var check = false;


function chequeMate(){
    if(check == false){
        //O metodo abaixo executa a funcao indicada a cada 1 segundo
        var timer1 = setInterval(function(){start()}, 1000)
        //O metodo abaixo executa a funcao indicada uma unica vez a cada 13,2 segundos
        //O valor de 13,2 foi escolhido aqui tendo em consideracao o contador de vai de 10 ate zero mais o tempo do gif que tem mais ou menos 3,2 segundos
        var timer2 = setTimeout(function(){end()}, 13200)
        var count =10;
        function start(){
            soundBeep()
            document.getElementById("time").innerHTML = count
            if(count == 0){
             //Para parar o método setInterval que executa a funcao a cada 1 segundo usamos o método abaixo
             clearInterval(timer1)
             document.getElementById("fire").src = "explosion.gif" 
             document.getElementById("time").innerHTML = "GAME OVER" 
             soundThunder()
            }
            count--
        }
        check = true
    }
}


function soundThunder(){
    var beep = new Audio()
    beep.src = "Thunder_Crack.mp3"
    beep.play()
}

function soundBeep(){
    var beep = new Audio()
    beep.src = "Beep_Short.mp3"
    beep.play()
}

function end(){
    document.getElementById("fire").src = "clean.png"
}