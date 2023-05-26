// function findsum(arr){

const { count } = require("console");

// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==10){

//             return [arr[i],arr[j]];
//         }
//     }

// }


// }


// let arr=[1,2,5,6,4,9];
// console.log(findsum(arr))
 
// another way


// function findsum(){
//     let arr=[1,5,3,4,6,8];
//     let target=10;
//     let set =new Set();
//     for(let i=0;i<arr.length;i++){

//         let num=arr[i];
//         let match=target-num;
//         if(set.has(match)){
//             console.log(num,match)
//         }else{
//             set.add(num);
//         }

//     }
// }
// findsum();


// function swap(arr){

//     let target=6;
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j=arr.length-1;j>0;j--){
//             if(arr[i]==6){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr=[6,3,4,5,4,3,6];
// console.log(swap(arr));


// function findEven(arr){
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//            console.log('$');
//         }else{
//            return [arr[i]]
//         }
//     }
// }
// let arr=[1,2,3,4,5,6];
// console.log(findEven(arr));




// function repeat(){
//     let a=[4,4,5,3,2,1];
//     for(let i=0;i<a.length;i++){
//    for(let j=i+1;j<a.length;j++){
//     if(a[i]==a[j]){
//         console.log(a[i]);
//     }
//    }
//     }

// }
// repeat();


// function counts(){
//     let value=[1,2,3,4,5,6,7,8];
//     let even;
//     let odd;
//     for(let i=0;i<value.length;i++){
//         if(a[i]%2==0){
//             even++;
//         }
//         else{
//             odd++;
//         }
//     }
//     console.log('even count ' + even);
//     console.log('odd count '+ odd);
// }


// let numbers=[1,2,3,4,5,6,7,8];

// let filter=numbers.filter((num)=>{
//     return num%2==1;
// })
// console.log(filter);


// let value=[1,3,4,5,67,8,9,10,11,12,13];
// let odd=0;
// let even=0
// for(let i=0;i<value.length;i++){
//     if(value[i]%2==1){
//         odd++;
//     }else{
//         even++;
//     }
// }
// console.log('odd is '+odd,'Evem is '+ even);









//reverse an array
    // let array=[5,4,3,2,1];
    // let reverse=[];
    // for(let i=array.length-1;i>=0;i--){
    //     reverse.push(array[i])
    // }
    // console.log(reverse);

//     let arr=[1,1,1,2];
//     let count=0;
 
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//             count++;
            
//             }
            
//         }
        
//     }
// console.log(count);

// let arr=[5,6,1,3,4,2]
// let count=0;
// for(let i=0;i<=arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]>arr[i]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//         count++;
//     }
// }
// console.log(arr)


//common array and hastabel 
// function itemCommon(arr1,arr2){
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]) return 
//         }
//     }
//     return false

// }

// console.log(itemCommon([1,3,5],[2,4,5]))


//sorting_+ second largest


// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
//         }
       
//     }
//  console.log(arr[arr.length-2])
  
//     return arr;
  

   

// }

// console.log(selection([8,4,6,10,12,3,4,99,88]))

//second larges
// function findSecondLargest(arr) {
//     let largest = arr[0];
//     let secondLargest = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
    
//     return secondLargest;
//   }


//second largest 

// function secondLargest(arr){
//     let large=0
//     let secondLarge = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>large){
//             secondLarge=large
//             large=arr[i];
//         }
//     }
//     console.log(large,secondLarge)
// }

// secondLargest([3,4,5,6,6])

function secondLarge(arr){
    let large=0;
    let secondLargest=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            secondLargest=large
            large=arr[i];
        }
    }
    console.log(secondLargest);

}

console.log(secondLarge([3,4,5,6,1,2]));


//string reverse
// function rversString(str){
//     let newStr=''
//     for(let i=str.length-1;i>=0;i--){
//         newStr+=str[i]
//     }
//     console.log(newStr);
// }

// rversString('afsal')


//string concate using javascript
// let name='afsal';
// let seconName='afi';
// let fullName=name.concat(seconName)
// console.log(fullName);



//count adjacent repeated elements
// function repeateCount(arr){
//     let count=1;
//     let bigcount=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==arr[i+1]){
//             count++;
//         }else{
//             if(bigcount<count){
//                 bigcount=count;
//             }
//             count=1;
//         }
//     }
//     return bigcount;
// }
// console.log(repeateCount([1,2,3,3,3,3,4,5,6]));



//repeated element count
// function repeateCount(arr){
//     let count=1;
//     let bigCount=0;
//     for(let i=0;i<arr.length;i++){
//         count=1;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count++;
//             }
//         }

//         if(count > bigCount){
//             bigCount=count;
//         }

//     }
//     console.log(bigCount);

// }

// repeateCount([1,2,3,4,4,4,4,5,5,5,5,5])

//duplicate elements
// let array=[1,2,2,3,4,5,6,1];
// let duplicate=array.filter((item,index)=>{
//     return array.indexOf(item) !==index
// })
// console.log(duplicate);




//switch 
// function totalMarks(marks){

//     let grade;

//     switch(true){
//         case marks>=90:
//             grade='A+';
//             console.log(grade);
//             break;
//         case marks>=80:
//             grade='B+';
//             console.log(grade);    
//             break;
//          case marks>=70:
//             grade='c+';
//             console.log(grade);   
//             break;
//             default :
//             grade='F';
//             console.log(grade);
//             break;
//     }
// }

// totalMarks(60)