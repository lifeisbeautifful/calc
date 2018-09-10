
    
let summa=0;

while(true){
    let value=eval(prompt("Введіть математичну дію"));
   if(!value)break;
    summa+=value;
}

alert("результат="+summa);