

// function bubbleSort(arr){
//     for(let i=arr.length;i>0;i--){
//         for(let j=0;j<i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;

// }
// console.log(bubbleSort([2,4,5,10,6,8,9]));

//this is the another method of bubble sort

// function bubbleSort(arr){
//   for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
//   }
//   return arr;

// }

// console.log(bubbleSort([45,23,2,4,77,9]))



function bubbling(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr;

}

console.log(bubbling([4,5,1,2,9,8,7]));









