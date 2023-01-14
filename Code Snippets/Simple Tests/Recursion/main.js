function countdown(n){
    console.log(n)
    if(n){
      countdown(n-1)
    }
  }
  countdown(10)