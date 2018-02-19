var greetSomeone = function(greeting, name, question){
    console.log(greeting + ', ' + name + '. ' + question);
  } 
  
  let curryFunc = function(func){
    var expectedParameters = func.length;
    var parameters = [];
    var curriedFunction = function(){
      let args = Array.prototype.slice.call(arguments);
      if(args.length === expectedParameters 
         || (args.length + parameters.length) >= expectedParameters){
          parameters = [ ...parameters, ...args ];
          //we have all the parameters, call the original function
        func.apply(this, parameters);
      }else{
        //add the added parameters
        parameters = [ ...parameters, ...args ];
        return curriedFunction;
      }
    }
    return curriedFunction;
  }
  
  let curriedGreet = curryFunc(greetSomeone);
  let greetHello = curriedGreet('hello');
  let helloToBob = greetHello('Bob');
  helloToBob('And how are you?');
  
  let newGreet = curryFunc(greetSomeone);
  let greetWhatUpToDawg = newGreet('What up','Dawg', 'And how do you do this fine day?');
  
  //greetWhatUpToDawg('And how do you do this fine day?');
  
  