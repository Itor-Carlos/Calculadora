



function calcular(tipo,valor){
  
    let cont = 0;

    if(tipo === 'acao'){

        if(valor === 'c'){
            document.getElementById('visor').value = '';
            document.getElementById('resultado').value = ''
        }

        
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('visor').value += valor;
            for(cont = 0;cont<7;cont++){
                document.getElementsByClassName('operacao')[cont].setAttribute('disabled',' ')
                document.getElementsByClassName('operacao')[cont].classList.add('desuso')
            }

        }

        if(valor === '='){
            let valor_campo = document.getElementById('visor').value
            document.getElementById('resultado').value = eval(valor_campo)
        }
        

    }

    else if(tipo === 'valor'){
        document.getElementById('visor').value += valor;
        for(cont = 0;cont<7;cont++){
            document.getElementsByClassName('operacao')[cont].removeAttribute('disabled')
            document.getElementsByClassName('operacao')[cont].classList.remove('desuso')
        }

    }  

}

