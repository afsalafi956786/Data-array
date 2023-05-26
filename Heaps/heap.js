

// class maxBinaryHeap{
//     constructor(){
//         this.values=[]
//     }
//     insert(element){
//         //push the element at the end of the array
//         this.values.push(element)
//         this.bubbleUP()
//     }
//     bubbleUP(){
//         //find the last index of the value in an array
//         let idx=this.values.length-1
//         let element=this.values[idx];
//         while(idx>0){
//             //find the parentIndex 
//             let parentIdx=Math.floor((idx-1)/2);
//             let parent=this.values[parentIdx];
//             if(element <=parent) break;
//             this.values[parentIdx]=element;
//             this.values[idx]=parent;
//             idx=parentIdx;



//         }

//     }
// }  
// let heap=new maxBinaryHeap();
// heap.insert(55);
// heap.insert(44);
// heap.insert(42);
// heap.insert(39);
// heap.insert(33);
// heap.insert(199)
// heap.insert(29)
// console.log(heap.values);                        


 
//  0  1   2  3  4  5  6  7       idx-1/2
// [50,44,39,36,33,29,22,55]      3-1/2  
//           idx  
// [50,44,39,55,33,29,22,36]    

// [55,44,39,50,33,29,22,36]  




// class maxBinaryHeap{
//     constructor(){
//         this.values=[]
//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbule()
//     }
//     bubbule(){
//         let idx=this.values.length-1;
//         let element=this.values[idx];
//         while(idx>0){
//             let parentIdx=Math.floor((idx-1)/2);
//             let parent=this.values[parentIdx];
//             if(element<=parent) break;
//             this.values[parentIdx]=element;
//             this.values[idx]=parent;
//             idx=parentIdx
//         }
//     }
// }

// let heap=new maxBinaryHeap()
// heap.insert(44);
// heap.insert(33);
// heap.insert(76);
// heap.insert(25);
// heap.insert(55);
// console.log(heap.values);


// class binaryHeap{
//     constructor(){
//         this.values=[];

//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbleUp()
//     }
//     bubbleUp(){
//         let idx=this.values.length-1;
//         let element=this.values[idx];
//         while(idx>0){
//             let parentIdx=Math.floor((idx-1)/2);
//             let parent=this.values[parentIdx];
//             if(element<=parent) break;
//             this.values[parentIdx]=element;
//             this.values[idx]=parent;
//             idx=parentIdx;
//         }
//     }
// }






                        

