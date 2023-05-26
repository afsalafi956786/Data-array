// let array=[1,2,3,4,5,6,7,8,9];
// let even=array.filter((elem)=>{
//   return elem %2==0;
// })

const { accessSync } = require("fs");
const { cursorTo } = require("readline");
const { addAbortSignal } = require("stream");


// const k= even.reduce((acc,crr)=>(acc+crr),0)
// console.log(k);


//sum of even numbers 
// let array=[1,2,3,4,5,6,7,8,9];
// let even=array.filter((elem)=>{
//     return elem %2==0;
// })
// let hold=even.reduce((acc,curr)=>{
//     return acc+curr;
// })
// console.log(hold);

// let arry=[1,2,3,2,4,,5,6,7,8,9];
// const hai=arry.reduce((acc,curr)=>{
//    if(acc.indexOf(curr)===-1){
//     acc.push(curr);
//    }
//    return acc;
// })
// console.log(hai);





//remove ducplicate elements
// let array=[1,2,3,4,5,6,7,7];
// let hello=array.reduce((acc,curr)=>{
//     if(acc.indexOf(curr)===-1){
//         acc.push(curr)
//     }
//     return acc;
// },[])
// console.log(hello);




//find method
// let array=[1,2,3,4,4,5,6];
// let found=array.find((elem)=>{
//     if(elem==6){
//         return elem
//     }
// })
// console.log(found);




//create copy of an arry
// const arry=[1,2,3,4,54,6,7,9];
// let copy=[];
// arry.forEach((elem)=>{
//     copy.push(elem);
// })
// console.log(copy);

//do while loop
// let i=0;
// do{
    
//     console.log('aryan');
// i++;
// }while(i<=10)

//syntax of while loop
// let i=0;
// while(i<=5){
//     console.log('afsal');
//     i++;
// }


// let array=[1,2,3,4,5,6,7,8];
// let mapped= array.map((elem)=>{
//      return elem *10;

// })
// console.log(mapped);


//shallow copy 
// let obj={
//     id:1,
//     name:'afsal',
//     age:22
// }
// let obj2={...obj};
// obj2.name='aravind';
// console.log(obj.name);


//deeep copy
// let obj={
//     id:1,
//     name:'afsal',
//     age:22
// }
// let obj2=obj;
// obj.name='aranvan';
// console.log(obj.name);
// console.log(obj2.name);

//tostring
// let num=15;
// let text=num.toString(2)
// console.log(text);

//resucrsion
// function recursion(){
//     console.log('hai evey one');
//     recursion();
// }
// recursion();



//object.freeze()
// let obj={
//     prop:23
// };
// Object.freeze(obj);
// obj.prop=44;
// console.log(obj.prop);




//memoization
// let hello='Hello'
// function mem(){
//     let name='afsal';
//     console.log(`${hello} ${name}`);
// }
// mem()

//pure function
// function add(a,b){
//     return a+b;


// }
// console.log(add(2,3));


//shallow copy 
// const a={
//     id:1,
//     name:'afsal',
//     place:'malappuram'
// }

// const b=a;
// b.id=2;
// b.name='vipin varghees'
// console.log('a value',a);
// console.log('b value',b);


// find the largest number in  arrr

// let arr=[1,2,3,4,4,100,30];
// console.log(Math.max(...arr));




// let arr=[1,2,3,4,5,6,7];
// let r = arr.filter((elm,i)=>i%2==0)


// let n=r.reduce((acc,curr)=>{
// return acc+curr;
// },0)
// console.log(n);

//duplicate number
// let aa=[1,2,3,4,5,5,6,6];
// let n=aa.filter((elem,index)=>{
//  return  aa.indexOf(elem) !==index;
// })
// console.log(n);


// let arry=[1,2,3,2,4,,5,6,7,8,9];
// const hai=arry.reduce((acc,curr)=>{
//    if(acc.indexOf(curr)===-1){
//     acc.push(curr);
//    }
//    return acc;
// })
// console.log(hai);

