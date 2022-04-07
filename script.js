const NumeberTogenerate = 5;
let NumberGenerate=[];
let Row = document.querySelector('.riga');
function RandomGenerateNumbers(){
    for(i=0;i<NumeberTogenerate;i++){
        let GenerateNumber = Math.floor(Math.random() * 100);
        NumberGenerate.push(GenerateNumber);
    }
    Row.innerHTML += NumberGenerate;
    return NumberGenerate
};

RandomGenerateNumbers();
setTimeout(VerificationNumber, 30000)

// console.log(NumberGenerate)
// console.log(NumberGenerate.length)

let Verifica;
let NumRight=[];
let Num = 0;
function VerificationNumber(){
Row.style.display= "none";
let NewRow = document.getElementById("correctnumber");
let NumUtent =[];
for(i=0;i<NumberGenerate.length;i++){
  Verifica = parseInt(prompt('inserisci il numero'));
  console.log(Verifica)
    NumUtent.push(Verifica)
  if(NumberGenerate.includes(Verifica)){
        console.log('ciao')
        NumRight.push(Verifica)
        Num++;
    }else {
        console.log('miao')
    }
    console.log(NumUtent)
}
console.log(NumRight)
NewRow.innerHTML = "i numeri indovinati sono "+ Num + " e sono: " + NumRight;

}
