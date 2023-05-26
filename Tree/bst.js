// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null;
//     }
//     insert(value){
//         let newNode=new Node(value)
//         //first check root null 
//         //this only first root condition
//         if(this.root===null){
//             this.root=newNode;
//             return this;   
//         }else{
//             //after root its working
//             //start begining
//             let current=this.root;
//             while(true){
                //    if(value===current.value) return undefined;
//                 if(value<current.value){
//                     //value lessthan current set left
//                     if(current.left===null){
//                         current.left=newNode;
//                         return this;
//                     }else{
//                         //already have a left value
//                         //change the currunt left posiotion to other left
//                         current = current.left
//                     }
//                 }else if(value > current.value){
//                     if(current.right===null){
//                         current.right=newNode;
//                         return this;
//                     }else{
//                         current=current.right;    
//                     }
//                 }
//             }

//     }
//     }
// }
// let tree=new binarySearchTree();
// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(13));
// console.log(tree.insert(11));
// console.log(tree.insert(2));
// console.log(tree.insert(16) );


//insert tree binary search

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class binarySearchTrees{
    constructor(){
        this.root=null
    }
    insert(value){
        let newNode=new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this
        }else{
            let current=this.root;
            while(true){
                if(value===current.value ) return undefined;
                if(value<current.value){  
                    if(current.left===null){
                        current.left=newNode;
                        return this 
                    }else{
                          current=current.left 
                    }
                }else if(value>current.right){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }else{
                        current=current.right
                    }
                }
            } 
        }
    }
    find(value){
        if(this.root===null) return undefined;
        let current=this.root,
        found=false;
        while (current && !found){
            if(value<current.value){
                current=current.left;
            }else if(value>current.right){
                current=current.right;
            }else{
                return true;
            }
        }
        return false;

    }
    //traverse bfs
    levelOrder(){
        const queue=[];               
        queue.push(this.root);
        while(queue.length){
            let current=queue.shift();
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }

    }
    //traverse dfs preorder traverse
    preOrder(root){
       
        if(root){
         console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);;
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.preOrder(root.left);
            this.preOrder(root.right);
            console.log(root.value);
        }
    }
    min(root){
        //does not contain any left root
        if(!root.left){
            return root.value;
        }else{
            //contains the sub left node we need to recursively call the left node to reach
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }
    
}

let tree=new binarySearchTrees();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
// console.log(tree.find(3));
// tree.preOrder(tree.root)
// tree.inOrder(tree.root)
console.log(tree.min(tree.root));
console.log(tree.max(tree.root));








 