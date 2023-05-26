// function merge(arr1,arr2){

//     let result=[]
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr2[j]>arr1[i]){
//             result.push(arr1[i]);
//             i++;

//         }else{
//             result.push(arr2[j]);
//             j++; 
//         }
//     }
//     while (i<arr1.length){
//         result.push(arr1[i])
//         i++;

//     }
//     while (j<arr2.length){
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;

// }

// console.log(merge([2,3,9],[6,7,8,10]))


//best case merge sort




// function merge(arr1,arr2){
//     let result=[];
//     let i;
//     let j;
//     while(i<arr1.length && j<arr2.length){
//         if(arr2[j]>arr1[i]){
//             result.push(arr1[i]);
//             i++;
//         }else{
//             result.push(arr2[j])
//             j++;
//         }
//     }
//     while (i<arr1.length){
//         result.push(arr1[i])
//         i++;
//     }
//     while(j>arr2.length){
//         result.push(arr2[j]);
//         j++
//     }
//     return result;
// }

// console.log(merge([100],[1,2,3,4,5]));


//merge sort working
// function mergeSort(arr){
    //If the array has no elements or only one element, then it is already sorted by definition, and we can simply return the array as is.
//     if(arr.length<2){
//         return arr;
//     }
//     const mid=Math.floor(arr.length/2);
//     const left=arr.slice(0,mid);
//     const right=arr.slice(mid)
//   return merge( mergeSort(left),mergeSort(right)) 

// }
// function merge(left,right){
//     const sortedArr=[]
//     //next we check both arrays are not empty
//     while(left.length && right.length){
//         //we compare the first element to the two arrays and
//           //push smaller element to the sorted Array 
//           if(left[0]<=right[0]){
//             sortedArr.push(left.shift())
//           }else{
//             sortedArr.push(right.shift())
//           }

//     }
//     //then we merge them order is important
//     return [...sortedArr,...left,...right]

// }
// console.log(mergeSort([5,6,12,3,2,1,99,88]));








