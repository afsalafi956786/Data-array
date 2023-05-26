// function binary(arr,val){
//     let start=0;
//     let end=arr.length-1;
//     let middle=Math.floor((start+end)/2);
//     while(arr[middle]!==val && start<=end){
//         if(val<arr[middle]) end=middle-1
//         else start=middle+1;
//         middle=Math.floor((start+end)/2);
//     }
//     if(arr[middle]===val){
//         return middle;
//     }else{
//         console.log('kitteela');
//     }

// }

// console.log(binary([500,100,200,300,400,500],300)) 


// function binary (arr,val){
//     let start=0;
//     let end=arr.length-1;
//     let middle=Math.floor((start+end)/2);
//     while(arr[middle]!==val && start<=end){
//         if(val<arr[middle]) end=middle-1;
//         else start=middle+1;
//         middle=Math.floor((start+end)/2)
//     }
//     if(arr[middle]===val){
//         return middle;
//     }
// }
// console.log(binary([1,2,3,4,5,6],3));




let list=new stack();
list.push(4);
list.push(6);
list.push(8);
list.traverse()
console.log(list);
