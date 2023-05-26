// class node{
//     constructor(val){
//         this.val=val;
//         this.next=null;

//     }
// }
// class queue{
//     constructor(){
//         this.first=null;
//         this.last=null;
//         this.size=0;
//     }
//     enqueue(val){
//         let freshNode=new node(val);
//         if(!this.first){
//             this.first=freshNode;
//             this.last=freshNode;
//         }else{
//             this.last.next=freshNode;
//             this.last=freshNode;
//         }
//         return ++this.size;
//     }
//     dequeue(){
//         if(!this.first) return null;
//         let temp=this.first;
//         if(this.first===this.last){
//             this.last=null;
//         }
//         this.first=this.first.next;
//         this.size--;
//         return temp.val;

//     }
//     travers(){
//         let result=this.first;
//         while(result){
//             console.log(result.val);
//             result=result.next;
//         }
//     }
// }
// let list =new queue();
// list.enqueue(22);
// list.enqueue(55);
// list.enqueue(45);
// list.travers();
// console.log('...............................');
// list.dequeue();
// list.travers();


class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        let freshNode=new node(val);
        if(!this.first){
            this.first=freshNode;
            this.last=freshNode;
        }else{
            let temp=this.first;
            this.first=freshNode;
            this.first.next=temp;
        }
        return ++this.size
    }
    pop(){
        if(!this.first) return null;
        let temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        this.first=this.first.next;
        this.size--;
        return temp.val
    }
}
let list=new stack();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
list.pop();
list.pop()
console.log(list);