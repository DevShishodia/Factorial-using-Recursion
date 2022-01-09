const input = document.getElementById('input');
const btn = document.getElementById('button');
 
const factorial = (number) => {
    if(number === 1) return 1;
          return number * factorial(number-1);
}

btn.addEventListener('click',function(){
    const num = input.value;
         if(num > 0){

    const factorialOfNumber =  factorial(num);
  
    document.getElementById('output').innerText = `Factorial of ${num} = ${factorialOfNumber}`;
       
    }else{
        document.getElementById('output').innerText = `Enter Only Positive Integer`;
    }
});

