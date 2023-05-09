
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = 15;
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;
    if( hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/manha.jpg'
        document.body.style.background = 'white'
    }else{
        if(hora >= 12 && hora < 18){
            //Boa tarde
            img.src = 'img/tarde.jpg'
            document.body.style.background = 'orange'
        }else{
            //Boa noite
            img.src = 'img/noite.jpg'
            document.body.style.background = 'black'
        }   
    }

}



