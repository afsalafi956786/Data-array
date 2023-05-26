

// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let j;
//         let current=arr[i];
//         for( j=i-1;j>=0 && arr[j]<current;j--){
//             arr[j+1]=arr[j]
//         }
//         arr[j+1]=current;

const { cursorTo } = require("readline");

    
//     }
//     return arr;
 
// }


// console.log(insertion([2,3,8,4,9,10,1,45,6]));


// function insertion(arr){
//  for(let i=1;i<arr.length;i++){
//     let j;
//     let current=arr[i];
//     for( j=i-1;j>=0 && arr[j]<current;j--){
//         arr[j+1]=arr[j]
//     }
//     arr[j+1]=current;
//  }
//  return arr;

// }
// console.log(insertion([4,5,56,2,3,1,89]));

// function insertionSorting(arr){
//     for(let i=1;i<arr.length;i++){
//         let currentVal=arr[i];
//         let j;
//         for( j=i-1;j>=0 && arr[j]>currentVal;j--){
//          arr[j+1]=arr[j]
//         }
//         arr[j+1]=currentVal;
//     }
//     return arr;

// }

// console.log(insertionSorting([3,2,1,6,5,9,8,10]))


function insertion(arr){
    
    for(let i=1;i<arr.length;i++){
        let current=arr[i];
        let j
        for( j=i-1;j>=0 && arr[j]>current;j--){
           arr[j+1]=arr[j]
        }
        arr[j+1]=current;
    }
    return arr;

}

console.log(insertion([5,6,2,1,3,4]));







