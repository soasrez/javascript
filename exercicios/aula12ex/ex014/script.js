
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //bomdia 
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#FCE3C3'
    } else  if (hora >= 12 && hora <= 18) {
        //boatarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#ACBDC8'
    } else {
        //boanoite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#013A7A'
        
    }
}




console.log(msg)