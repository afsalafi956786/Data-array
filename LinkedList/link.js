class node{
    constructor(val) {
        this.val=val;
        this.next=null;

        
    }
}
class singlyLInkedlist{
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0;
        
    }
    push(val){
        let frshNode=new node(val);
        if(! this.head){
            this.head=frshNode;
            this.tail=this.head;
        }else{
            this.tail.next=frshNode;
            this.tail=frshNode;
        }
        this.length++;
        return this;
    }
  
shift(){
    if(! this.head) return undefined;
    let oldHead=this.head;
    this.head=oldHead.next;
    this.length--;
    return oldHead;
}
    travers(){
        let result=this.head;
        while(result){
            console.log(result.val);
            result=result.next;
        }
    }
}
let list=new singlyLInkedlist();
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.unshift(1)
list.travers()