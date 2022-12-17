let sumArr = []
let index = 0
let carry = 0
while(n1.length>index || n2.length>index){
    let sum = carry
    if(n1[index]){
        sum += n1[index]
    }
    if(n2[index]){
        sum += n2[index]
    }
    carry = sum >= 10 ? 1 : 0;
    sumArr.push(sum % 10)
    index++
}
// accounts for final remainder
if(carry){
    sumArr.push(carry)
}