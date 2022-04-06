SetTimeout(RandomGenerateNumbers(){
    const NumeberTogenerate = 5;
    let NumberGenerate=[];
    for(i=0;i<NumeberTogenerate;i++){
        let GenerateNumber = Math.floor(Math.random() * 100);
        NumberGenerate.push(GenerateNumber);
    }
    let Row = document.querySelector('.riga');
    Row.innerHTML += NumberGenerate;
    return NumberGenerate
}

