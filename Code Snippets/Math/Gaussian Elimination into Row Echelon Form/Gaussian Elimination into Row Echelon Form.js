function rowEchelonForm(m){
    for(let u=0; u<m.length;u++){
        for(let i=1; i<m.length; i++){  
          let coeff = -(m[i][u]/m[u][u])
          if(m[i][u]!==0 && m[u][u]!==0 && i!==u){
            for(let o=0; o<m.length; o++){
              m[i][o] = m[u][o]*coeff+m[i][o]       
            }
          }
        }
      }
      return m
}