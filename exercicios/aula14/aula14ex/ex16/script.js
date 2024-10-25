
function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { 
            //CONTAGEM CRESCENTE
                for(let c = i; c <= f; c+= p) {
                    res.innerHTML += ` ${c} \u{1F449}` 
                }
            } else {
        //CONTAGEM DECRESCENTE
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
            res.innerHTML += `\u{1F3C1}`


    }

}

/* || ERRADO ||
    var res = document.querySelector('div#res')
    for(var n1 = document.querySelector('input#txti'); n1<=document.querySelector('input#txtf'); n1+document.querySelector('input#txtp')){
        console.log(n1)
    } 
    res.innerHTML(`Preparando a contagem!`)
*/
    

