// function quickSort(arr){
//    if(arr.length<1){
//     return arr;
//    }
//     let pivot=arr[arr.length-1];
//     left=[];
//     right=[];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//     }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]

// }


// console.log(quickSort([6,7,9,8,1]));


//another youtube channel 

// function quickSort(arr){
//     if(arr.length===1){
//         return arr;
//     }
//     const pivot=arr[arr.length-1];
//     let left=[];
//     let right=[];

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     //so we build two array may it could be empty
//     if(left.length>0 && right.length>0){
//        return [...quickSort(left),pivot,...quickSort(right)]
//     }else if(left.length>0){ 
//         return [...quickSort(left),pivot] 
//     }else{
//         return [pivot,...quickSort(right)]
//     }


// }

// console.log(quickSort([-1,2,10,9,3,4,5,99,88]));

