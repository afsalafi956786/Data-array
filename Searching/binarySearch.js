// function binary(arr,elem){
//     let start=0;
//     let end=arr.length-1;
//     let middle=Math.floor((start+end)/2);
//     while(arr[middle]!==elem && start<=end){
//         if(elem<arr[middle]){
//             end=middle-1;
//         }else{
//             start=middle+1;
//         }
//         middle=Math.floor((start+end)/2)
//     }
//     if(arr[middle]===elem){
//        return middle;
//     }
// }
//  console.log(binary([5,23,4,8,6,7,1],7));






// function binary(arr,val){
//     let start = 0;
//     let end = arr.length-1;
//     let middle = Math.floor((start+end)/2);
    
//     while(arr[middle] !==val && start <= end){
//            if(val <arr[middle]){
//             end= middle -1;
//            }else{
//             start=middle+1;
//            }
//            middle= Math.floor((start + end)/2);       
//     }
//     if(arr[middle]===val){
//         return middle;
//     }
//     }
//     console.log(binary([5,23,4,8,6,7,1],7))

//     // console.log(binary([5,23,4,8,6,7,1],7))



function linearSearch(arr,val){
       for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            console.log(i);
        }
       }
}

linearSearch([1124,55,3,455,6,44,44],455)