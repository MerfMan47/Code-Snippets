
let m = [[0,4,2],[0,0,1],[1,2,0]]

function rowSwap(arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }
  
//   test if swapping is nessesary

  for(let i = 0; i<m.length; i++){
    if(m[i][i]==0){ 
      let swapped = false
      let row = 0
      while(swapped===false){    
        if(m[row][i]!==0 && m[i][row]!==0){
          rowSwap(m, i, row) 
          swapped = true
        }else{
          row++
        }
      }       
    }    
  }