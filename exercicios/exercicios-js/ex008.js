var idade = 99
if (idade > 0 && idade < 16){
    console.log('Não legível')
}
else if(idade >= 16 && idade < 18 ){
    console.log('Legível não obrigatório')
}
else if(idade >= 18 && idade < 100 ){
    console.log('Legível obrigatório')
}
else{
    console.log('Idade inexistente')
}