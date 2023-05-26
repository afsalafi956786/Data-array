class node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null;
    }
    push(val){
        let frshNode=new node(val);
        if(this.top==null){
            this.top=frshNode;
        }else{
            frshNode.next=this.top;
            this.top=frshNode;
        }
    }
    pop(){
        if(this.top==null){
            console.log('underflow');
        }else{
            this.top=this.top.next;
        }
    }
    traverse(){
        let result=this.top
        while(result){
            console.log(result.val);
            result=result.next;
        }
    
    }
}

let list=new stack();
list.push(4);
list.push(6);
list.push(8);
list.push(9);
list.pop();
list.traverse();
console.log(list);


class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class queue{
    constructor(){
        this.first=null;
        this.last=null;
    }
    enqueue(val){
        let frshNode=new node(val);
        if(!this.first){
            this.first=frshNode;
            this.last=frshNode;
        }else{
            this.last.next=frshNode;
            this.last=frshNode;
        }
    
    }
    pop(){
        if(!this.first){
            console.log('underflow');
        }
            let temp=this.first;
            if(this.first===this.last){
                this.last=null;
            }
            this.first=this.first.next;
            return temp.val;

    }
    traverse(){
        // let result=this.first;
        // while(result){
        //     console.log(result.val);
        //     result=result.next;
        // }
        console.log(this.first.val);
    }
}
let list=new queue();
list.enqueue(3);
list.enqueue(2);
list.enqueue(4);
list.enqueue(6);

list.traverse()

class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null;
    }
    push(val){
        let frshNode=new node(val)
        if(this.top==null){
            this.top=frshNode;
        }else{
             frshNode.next=this.top;
             this.top=frshNode;
        }
    }
    travers(){
        let result=this.top;
        while(result){
            console.log(result.val);
            result=result.next
        }
    }
    pop(){
        if(this.top===null) {
            console.log('error');
        }else{
           this.top= this.top.next
        }
    }
}





list.push(3);
list.push(2);
list.push(4);
list.push(6);
// list.dequeue()
console.log(list);
list.pop()
list.travers()
// list.traverse()


