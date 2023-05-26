// class node{
//     constructor(val) {
//         this.val=val;
//         this.next=null;
//         this.prev=null;       
//     }

// }
// class doublyLinkeList{
//     constructor() {
//         this.head=null;
//         this.tail=null;
//         this.length=0;
//     }
//     push(val){
//         let freshNode=new node(val);
//         if(!this.head){
//             this.head=freshNode;
//             this.tail=this.head;
//         }else{
//             this.tail.next=freshNode;
//             freshNode.prev=this.tail;
//             this.tail=freshNode; 
//         }
//         this.length++;
//         return this; 
//     } 
//     travers(){ 
//         let result=this.head;
//         while(result){
//             console.log(result.val);
//             result=result.next;
//         }
//     }
// }

// let list=new doublyLinkeList();
// list.push(22);
// list.push(88);
// list.push(29);
// console.log(list);
// list.travers() 

  


class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class singlyLinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let freshNode=new node(val);
        if(!this.head){
            this.head=freshNode;
            this.tail=this.head;
        }else{
            this.tail.next=freshNode;
            this.tail=freshNode;
        }
        this.length++;
        return this;
    }
   
    get(index){
        if(index<0 || index>=this.length) return undefined;
        let counter=0;
        let current=this.head;
        while(counter !=index){
            current=current.next;
            counter++;
        }
        return current;

    }
     

    traverse(){
        let result=this.head;
        while(result){
            console.log(result.val);
            result=result.next;
        }
    }
}

let list=new singlyLinkedlist();
list.push(33);
list.push(22);
list.push(44);
console.log(list.get(1));
list.traverse();
