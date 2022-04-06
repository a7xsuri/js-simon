const NumeberTogenerate = 5;
let Row = document.querySelector('.riga');
function RandomGenerateNumbers(){
    let NumberGenerate=[];
    for(i=0;i<NumeberTogenerate;i++){
        let GenerateNumber = Math.floor(Math.random() * 100);
        NumberGenerate.push(GenerateNumber);
    }
    Row.innerHTML += NumberGenerate;
    return NumberGenerate
};

RandomGenerateNumbers();
setTimeout(VerificationNumber, 1000)

function VerificationNumber(){
Row.style.display= "none";
const NewRow = document.createElement("p");
let NumRight =[];
for(i=0;i<NumeberTogenerate;i++){
    let Verifica = prompt('inserisci il numero');
    if(Verifica.includes(NumberGenerate)){
        NumRight.push(Verifica);
    }
}
NewRow.innerHTML = "i numeri indovinati sono" + NumRight;
console.log(Verifica)
}
