//push a value in singly linked list;

// class node{
//     constructor(val) {
//         this.val=val;
//         this.next=null;
        
//     }
// }
// class singlyLinkedList{
//     constructor() {
//         this.head=null;
//         this.tail=null;
//         this.length=0;
        
//     }
//     push(val){
//         var freshNode=new node(val);
//         if(!this.head){
//             this.head=freshNode;
//             this.tail=this.head;
//         }else{
//             this.tail.next=freshNode;
//             this.tail=freshNode;
//         }
//         this.length++;
//         return this;
//     }
//     traverse(){
//         var result=this.head;
//         while(result){
//             console.log(result.val);
//             result=result.next;
//         }
//     }
// }
// var list=new singlyLinkedList();
// list.push(1);
// list.push(55);
// list.push(44);
// list.push(33);
// console.log(list.traverse());
// .....................................................



//pop
// Pop (){
//     if(!this.head) return undefined;
//     var current=this.head;
//     var newTail=current;
//     while(current.next){
//         newTail=current;
//         current=current.next;
//     }
//      this.tail=newTail;
//      this.tail.next=null;
//      this.length--;
//      return current;
// }

// ...................................................


//shift

// shift(){
//     if(!this.head) return undefined;
//     let oldHead=this.head;
//     this.head=oldHead.next;
//     this.length--;
//     return oldHead;
// }


//.....................................................

//unshift
// unshift(val){
//     let neNode=new node();
//     if(!this.head){
//         this.head=neNode;
//         this.tail=this.head;
//     }else{
//         neNode.next=this.head;
//         this.head=newNode;
//     }
//     length++;
//     return this;
// }


//...........................................................

