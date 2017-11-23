const fizzBuzz = (n) => {
    for (i = 1; i <= n; i++) {
        const isMultiple3 = (i % 3) === 0;
        const isMultiple5 = (i % 5) === 0;
        const isMultiple5and3 = isMultiple3 && isMultiple5;
        if(isMultiple5and3) {
            console.log('fizzbuzz');
        }else if(isMultiple3){
            console.log('fizz');
        } else if(isMultiple5){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }    
}

module.exports = fizzBuzz;