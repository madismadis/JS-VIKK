let array1 = [1,2,3]
let array2= [2,30,1,]

// ---a---
function mergeArray(array1, array2){
 return array1.concat(array2.filter((item) => array1.indexOf(item) < 0))

}
console.log(mergeArray(array1, array2));

// ---b---

function mergeArray(array1, array2){
    return Array.from(new Set([].concat(array1, array2)))
}

console.log(mergeArray(array1, array2));
