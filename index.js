// Add your functions here
console.log("Locked and loaded, ready to rrrrrrrrrrrrrrrumble");

function map(sourceArray, callbackFunction){
  let newArray = []

  sourceArray.forEach(v => {
    newArray.push(callbackFunction(v))
  })

  return newArray
}

function reduce(sourceArray, callbackFunction, memo=0){
  let ans
  if (!!memo){
    ans = memo
  } else {
    ans = sourceArray[0]
  }
  let i = (!!memo) ? 0 : 1

  for(; i < sourceArray.length; i++){
    ans = callbackFunction(sourceArray[i], ans)
  }

  return ans
}

//
// function reduce(src, cb, starting){
//   let r = (!!starting) ? starting : src[0]
//   let i = (!!starting) ? 0 : 1
//
//   for (; i < src.length; i++) {
//     r = cb(src[i], r)
//   }
//
//   return r;
// }
