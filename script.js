setInterval(() => {
    const date = new Date();

    let horas = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (min >= 0 && min <=9){
        min = ('0' + min)
    };
        
    if (horas >=0 && horas <=9){
        horas = ('0' + horas)
    };

    if (sec <=9){
        sec = ('0' + sec)
    };

    let horario = (horas + ':' + min + ':' + sec);

    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('img');
    
    msg.innerHTML = `Agora são ${horario}`;

    if (horas >= 0 && horas < 12){
        img.src = 'imagens/Manha.jpg'
        document.body.style.backgroundColor = '#cd5d05'
    } else if (horas >= 12 && horas < 18){
        img.src = 'imagens/Tarde.jpg'
        document.body.style.backgroundColor = '#4287c4'
    }else if (horas >=18 && horas <= 23){
        img.src = 'imagens/Noite.jpg'
        document.body.style.backgroundColor = '#0a1f47'
    };
}, 1000);