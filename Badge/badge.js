//spread operator

const { rejects } = require("assert")
const { resolveSoa } = require("dns")
const { resolve } = require("path")
const { json } = require("stream/consumers")

// let globalPlayer=['messi','ronaldo','demaria','neymar'];
// let localPlayer=['ali','afi','asi','aliv'];
// let mixed=[...globalPlayer,...localPlayer];
// console.log(mixed);


//rest spred operator

// const globalPlayer={
//     id:0,
//     userName:'aswin',
//     age:22
// }
// const {id,...rest}=globalPlayer;
// console.log(id);
// console.log(rest);


//slice method

// let a='afsalafi';
// let b=a.slice(0,5)
// console.log(b);


// function findings(){
//     let string='afsal afi'
//     let space=string.slice(0,5)
//     console.log(space);
// }
// findings();

//splice array add

// let array=[1,2,3,4];
// array.splice(2,0,'area');
// console.log(array);

//splice remove 

// let array=[1,2,3,4,5];
// array.splice(3,1);
// console.log(array);

//do loop
// let count=0
// do{
//     console.log(count);
//     count++;
// }
// while ( count<=10);

// let count=1;
// while(count<=10){
//     console.log(count);
//     count++;
// }


// const arrow=()=>{
//     console.log('my arrow function');
// }
// arrow();

// let array=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<array.length;i++){
//    sum=sum+array[i]
// }
// console.log(sum);

//self invoking funciton
// (function myfunction(){
//     console.log('iam a funciton');
// })();

//forEach
// let array=[1,2,3,4,5];
// let sum=0;
// array.forEach((elem)=>{
//     sum=sum+elem;
// })
// console.log(sum);

//split
// let str='afsal'
// let spc=str.split(',');
// console.log(spc);

// let string='afsalafi';
// let array=string.split(',');
// console.log(array);
// console.log(array.join());

//find index array
// let arry=[1,2,3,4,5];
// const home =arry.indexOf(4);
// console.log(home);


// let sum=(a,b)=>a+b;
// console.log(sum(2,2));

//set
// let fruits=new Set();
// fruits.add('banana').add('apple').add('lion').add('banana')
// console.log(fruits);


// let array=[1,2,3,4,5,6,7,8,9,10];
// array.map((elem)=>{
//     elem.
// })

//return a new arrray squar root 
// let arry=[1,2,3,4,5];
// let newArray=arry.map(Math.sqrt);
// console.log(newArray);

//multiply all the values in arrray with 10;
// array=[1,2,3,4,5];
// let newArray=array.map(newFunction)
// console.log(newArray);

// function newFunction(num){
//     return num *10
// }

// function string(str){
//     let newstr=''
//     for (let i = str.length-1; i >= 0; i--) {
//         newstr=newstr+str[i];
        
//     }
//     console.log(newstr)

//     if(newstr==str){
//         console.log('strng is paling')
//     }else{
//         console.log('not palindrome');
//     }

// }

// string('malayalam');

// let arr=[1,2,3,4,5];
// let val = arr.find((elem)=>elem==5)
// console.log(val);

// function calling(str){
//     let splited=str.split('');
//     let reversed=splited.reverse();
//    let palind= reversed.join('')
//    if(str==palind){
//     console.log('enterd num is palindrome');
//    }else{
//     console.log('not a palindrome');
//    }

// }
// calling('malayalamss')


// let obj={
//     'name':'hohn',
//     'age':22,
//     'city':'kochi'
// }
// let MyJson=JSON.stringify(obj);
// console.log(MyJson);

// const names=['afi','asi','abi','aravind'];
// names.map((name)=>{
//     console.log(name);
// })




// let p1=new Promise((resolve,reject)=>{
//     reject();
// })
// p1.then(()=>{
//     console.log('result success');
// }).catch(()=>{
//     console.log('failer');
// })




// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             resolve('afsal')
//     },2000)
// })
// async function anagh(){
//     let name=await promise
//     console.log(name);
// }
// anagh()

// let array=[1,2,3,4,5,6];
// let map1=array.map((ele)=>{
//    return ele*2
// })
// console.log(map1);


//duplicate number
// let aa=[1,2,3,4,5,5,6,6];
// let n=aa.filter((elem,index)=>{
//  return  aa.indexOf(elem) !==index;
// })
// console.log(n);
