// varible shadowing
// function test(){



//     let a='hello';
//     if(true){
//         let a='hi';
//         console.log(a)
//     }
//     console.log(a)
// }
// test()
// .................
// const errro
// const a=5;
// a=6;
// .................
// hoisting:this give undefined
// function abc(){
//     console.log(a);
    
//     var a=10;
// }
// abc()
// .................
//map
// let arr=[1,2,3,4,5];
// let multiple=arr.map((num,index)=>{
//     return num*3;
// });
// console.log(multiple);

//filter
//  let arr=[1,2,3,4];
// let value= arr.filter((num)=>num>2);
// console.log(value)

//redeuce
// const nums=[1,2,3,4];
// let reduces=nums.reduce((acc,curr)=>{
//   return acc+curr;
// },0)
// console.log(reduces)

// .................

// Map,filter,reduce interview quesitons
// 1.return only names with uppercase letter
//  let students=[
//     {name:'afsal',roll:31,marks:50},
//     {name:'amal',roll:44,marks:100},
//     {name:'isha',roll:22,marks:80},
//     {name:'sajeena',roll:44,marks:20},
//  ]
 
//  ans: there is multiple approch
//1. for loop

// let names=[];
// for(let i=0;i<students.length;i++){
//     names.push(students[i].name.toUpperCase())
// }
// console.log(names)

// 2.map-retun name uppercase
// let upper=students.map((student)=>{
//     return student.name.toUpperCase();
// })
// console.log(upper);

// 3-retun marks >60
// let data=students.filter((student)=>{
//     return student.marks>60;
// });
// console.log(data)

// 3-retun marks >60 and roll>40
// let data=students.filter((sudent)=>sudent.marks>60 && sudent.roll>40)
// console.log(data)

// 4-sum of all marks
// const sum=students.reduce((acc,curr)=>{
//     return acc+curr.marks;
// },0);
// console.log(sum)

// 5-return only names of students who score more than 60
// let filtered=students.filter((student)=>{
//     return student.marks>60;
// })
// let stu_name=filtered.map((item)=>{
//     return item.name;
// })
// console.log(stu_name)

// 6-return total marks for students with marks greater than 60 
// after 20 marks have been added to those who scored lessthan 60

// let totalmarks=students.map((stu)=>{
//     if(stu.marks<60){
//         stu.marks +=20;
//     }
//     return stu;
// })
// let mared=totalmarks.filter((item)=>{
//     return item.marks>60
// });
// let total=mared.reduce((acc,curr)=>{
//     return acc+curr.marks;
// },0)
// console.log(total)





// .....................
// noraml function
// function sqaure(num){
//     return num*num;
// }
// console.log(sqaure(5));

//immediatly invoked function
// (function square(num){
//     console.log(num*num)
// }(5))

// .....................
//spread operator
// function multiply(num1,num2){
//     console.log(num1*num2)
// }
// let values=[5,6];
// multiply(...values)

//rest opearator-//recieve value ...rest
// function values(x,y,z,...numbers){
//     console.log(x*y,numbers);
// }
// values(5,4,2,7,8,9,2)

//callback
// document.addEventListener('click',function (params){

// })

// .....................

//closure
// function dispaly(){
//     var name='Afsal';
//     function closure(){
//         console.log(name)
//     }
//     return closure;
// }
// var myfunc=dispaly();
// myfunc()



//shadowing
// let count=0;
// function counted(){
//     let count=1;
//     console.log(count)
// }
// console.log(count)
// counted()

// .....................

//objects
// const user={
//     name:'roadside coder',
//     age:24,
//     isToatal:true,
// }

// for(key in user){
//     console.log(key) //it gets only keys
//     console.log(user[key]) //it gets only values
// }

// .....................
//promise
// let p1=new Promise((resolve,reject)=>{
//     reject()
// })
// p1.then(()=>{
//     console.log('promise success')
// }).catch(()=>{
//     console.log('promise rejected')
// })

// null vs undefined
// it has been declared but the value has been initialized;-undefined
//null can be actual v alue

//  document.querySelector('#product').addEventListener('click',function(event){
//     console.log(event)
//  })


//async await 
// async function display(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('done')
//         },1000)
//     })

//     let result=await promise;
//     console.log(result)
// }
// display()

