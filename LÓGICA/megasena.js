var jogos = []


for (let index = 0; index < 6000; index++) {
    
    var jogoExiste = false
    var jogo = criarjogo()
    for (let index = 0; index < jogos.length; index++) {
        
        var jogoSalvo = jogos[index]
        if (compararColecoes(jogoSalvo,jogo)) {
        jogoExiste = true
        break; 
        }
        
    }

    if (!jogoExiste) {
    
    jogos.push(jogo)

    }
   
    jogoExiste = false
}
     console.log(jogos)
     console.log(compararColecoes([0, 1, 2 ,3 ,4],[4, 3, 2 , 1 , 0]))

    function criarjogo(){

        var numeros = []
        while (numeros.length < 6) {
        
        var numeroSorteado = Math.round(Math.random()* 60);
        if(numeroSorteado === 0) {
            
            continue
            
        }

        if(!numeros.includes(numeroSorteado)) {
    
        numeros.push(numeroSorteado)

        } 

        }

        return numeros
    }

    function compararColecoes(colecao1, colecao2) {

        var saoIguais = true;

        if (colecao1.length !== colecao2.length) {
            
            saoIguais = false;
            return saoIguais

        }
        
        var primeiracolecao = colecao1.sort()
        var segundacolecao = colecao2.sort()

        for (let index = 0; index < primeiracolecao.length; index++) {

            const item1 = primeiracolecao[index];
            const item2 = segundacolecao[index];
            
            if (item1!==item2) {
                
                saoIguais = false;
                break;

            }
        }

        return saoIguais
    }