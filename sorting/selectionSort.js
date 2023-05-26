// function selection(arr){
//     for(let i=0;i<arr.length;i++ ){
//         let lowest=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[lowest]){
//                 lowest=j;
//             }
//         }
//         let temp=arr[i];
//         arr[i]=arr[lowest];
//         arr[lowest]=temp;
//     }
//     return arr;



// }


// console.log(selection([6,3,4,9,12,2,40]));


function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let lowest=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[lowest];
        arr[lowest]=temp;
    }
    return arr
   
}
console.log(selectionSort([3,4,2,18,9,7,6]));


