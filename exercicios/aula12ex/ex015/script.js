function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANCA
                img.setAttribute('src', 'crianca-masc.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-masc.jpg')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'crianca-fem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-fem.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else { 
                //idosa
                img.setAttribute('img', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}