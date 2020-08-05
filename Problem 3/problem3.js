let countTo100 = (num) =>{
    let output = "";
    let isMultiple = false;

    if(num % 3 === 0){
        output = output + "Fizz";
        isMultiple = true;
    }
    
    if(num % 5 === 0){
        output = output + "Buzz";
        isMultiple = true;
    }

    if(!isMultiple) output = num;

    return output;
}

for(let i = 1; i <= 100; i++){
    console.log(countTo100(i));
}