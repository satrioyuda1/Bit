function perfect_match(number, data){
  let result = []
  for(let i=0;i<data.length;i++){
    for(let j=0;j<data.length;j++){
      if(data[i]+data[j]=== number){
      if(data[i]!==data[j]){
      result.push(i,j)
  
      }
    }
  }
  }
  if(result.length<1){
    return 'no way'
  }
   return result.filter((item,index)=>{return result.indexOf(item)===index})
}

let data=[2,7,11,15]
console.log(perfect_match(9,data))
console.log(perfect_match(22,data))
console.log(perfect_match(13,data))
console.log(perfect_match(11,data))
console.log(perfect_match(19,data))