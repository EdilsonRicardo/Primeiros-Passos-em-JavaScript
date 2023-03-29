

function calcular(){
    let txtv = document.querySelector('input#txtvel')
    let resultado = document.querySelector('div#resultado')
    let velocidade = Number(txtvel.value)
    resultado.innerHTML = `A sua velocidade actual é ${velocidade}km/h`
    
    if (velocidade > 60){
        resultado.innerHTML = `km/h`

    }
}