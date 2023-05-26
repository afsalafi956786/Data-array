// PUSH

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
        let freshNode=new node(val)
        if(!this.first){
            this.first=freshNode;
            this.last=freshNode;
        }else{
           let  temp=this.first;
            this.first=freshNode;
            this.first.next=temp;
        }
        return ++this.size;
    }
    pop(){
      if(!this.first) return undefined;
      let temp=this.first;
      if(this.first===this.last){
        this.last=null;
      } 
      this.first=this.first.next;
      this.size--;
      return temp.val;
    }
    travers(){
        // let result=this.first;
        // while(result){
        //     console.log(result.val);
        //     result=result.next;
        // }
        console.log(this.first.val);
        console.log(this.size);
    }
}


let list=new stack();
list.push(33);
list.push(55);
list.push(44);
list.travers();
// console.log('......................');
// console.log('after pop');

// console.log(list.pop());



