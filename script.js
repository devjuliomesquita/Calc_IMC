const btn = document.getElementById('btn');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome!==''&& altura!==''&& peso!==''){
        const valorimc = (peso/(altura*altura)).toFixed(2);
        let classe = '';

        if(valorimc<18.5){
            classe = 'abaixo do peso.';
        } else if(valorimc<24.9){
            classe = 'com o peso normal.';
        } else{
            classe = 'acima do peso.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorimc} e você está ${classe}`;
        
    }else{
        resultado.textContent='Preencha todos os campos!';
    }
};


btn.addEventListener('click',imc);