

/*var valor = 7;*/

for(var i = 1; i < 11; i++){
    /*O br insere uma quebra de linhas enquanto que o writeLN insere espaço*/
    /** O codigo abaixo efectua tabuada de um so nr */
    /*document.writeln(valor + " x " + i + " = " + (valor*i) + "<br>");*/
    document.writeln("<p> Tabuada do " + i + "</p>");
    for(var j=1; j < 11; j++){
        document.write(i + " x " + j + " = " + (i * j) + "<br>");
    }
}