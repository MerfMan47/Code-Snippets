let triangle = [[1],[1,1]]
  for (let i = 0; i < n; i++){
    triangle[i+1] = [1]
    triangle[i+1][i+1] = 1
    for(let o = 0; o < i; o++){
      triangle[i+1][o+1] = triangle[i][o] + triangle[i][o+1]
    }
  }