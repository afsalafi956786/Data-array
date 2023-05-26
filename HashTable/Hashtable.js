

 //with collision



// class hasTable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size
//     }

//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total +=key.charCodeAt(i)
//         }
//        return total % this.size;
//     }
//     set(key,value){
//         let index=this.hash(key);
//         this.table[index]=value;
//     }
//     get(key){
//         let index=this.hash(key);
//          return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

// }
// let table=new hasTable(5)
// table.set('name','Afsal')
// table.set('age',23)
// console.log(table.get('age'));
// table.display()


//Handle collision in hashtable using seperate chaining

// class hashTable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size;
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size;

//     }
//     set(key,value){
//         let index=this.hash(key); 
//         let bucket=this.table[index]
//         //we check there is no value stored  that index
//         if(!bucket){
//             //simply create new array and push the value;
//             this.table[index]=[[key,value]]
//         }else{
//             //if the value already exist that index 
//             //first check array contain sub array with same key so using find
//             let sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 //update its value
//                 sameKey[1]=value
//             }else{
//                 //if not push the key value pair
//                 bucket.push([key,value])
//             }

//         }

//     }
//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index];
//         if(bucket){
//             //we check if the array exist in samekey
//             const sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 //return the value of an item
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         let index=this.hash(key)
//          let bucket=this.table[index]
//          if(bucket){
//             let samekey=bucket.find(item=>item[0]===key)
//             if(samekey){
//                 bucket.splice(bucket.indexOf(samekey),1)
//             }
//          }
         
        
//     }
//     display(){
//         for(let i=0;i<table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

// }
// let table=new hashTable(5)
// table.set('name','Afsal');
// table.set('age',22);
// table.set('mathi','fish')
// table.display()


// class hashTables{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size;
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size;
//     }
//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index];
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameKeyItem=bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 sameKeyItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index];
//         if(bucket){
//             let sameKeyItem=bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

// }
// const table=new hashTables(5)
// table.set('name','Afsal');
// table.set('age',25);
// table.set('mathi','animal')
// table.display()

//collision handling using linear probing
// class HashTable{
//     constructor(size){
//         this.table= new Array(size);
//         this.size=size;
//     }

//     hash(key){
//         let hash=0
//         for(let i=0; i<key.length; i++){
//             hash+=key.charCodeAt(i);
            
//         }

//         return hash%this.size;
//     }

//     set(key, value){
//         let index = this.hash(key);
//         if(this.table[index] === undefined){
//             this.table[index]=[key,value];
//         }else{
//  d           while(this.table[index] != undefined){
//                 index++;
//             }
//         }
//         this.table[index] = [key,value]
//         console.log(this.table)
//     }

//     get(key){
//         let index = this.hash(key);
//         while (this.table[index] !== undefined) {
//             if (this.table[index][0] === key) {
//                 return this.table[index][1];
//             }
//             index++;
//         }
//         return undefined
//     }


// }

// let table = new HashTable(4);
// table.set('salmon','its a fish')
// table.set('sold','its a sold')

// table.set('cats','its a cats')




// class hasedTable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size;
//     }

//     set(key,value){
//         let index=this.hash(key)
//         if(this.table[index]===undefined){
//             this.table[index]=[key,value]
//         }else{
//             while(this.table[index] !=undefined){
//                 index++;
//             }
//         }
//         this.table[index]=[key,value]
        
//     }
//     get(key){
//         let index=this.hash(key);
//         while(this.table[index] !=undefined){
//             if(this.table[index][0]===key){
//                 return this.table[index][1];
//             }
//             index++
//         }
//         return undefined;
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table);
//             }
//         }
//     }



// }

// let table=new hasedTable(6)
// table.set('name','Afsal')
// table.set('age',24)
// table.set('fish','its mean')
// table.display()




// class hashtable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size;

//     }
//     set(key,value){
//         let index=this.hash(key)
//         if(this.table[index]===undefined){
//             this.table[index]=[key,value]
//         }else{
//             while(this.table[index]!=undefined){
//                 index++;
//             }

//         }
//         this.table[index]=[key,value]


//     }
//     get(key){
//         let index=this.hash(key);
//         while(this.table[index]!=undefined){
//              if(this.table[index][0]===key){
//                 return this.table[index][1]
//              }
//              index ++;
//         }
//         return undefined;
//     }
 
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

// }
// let table=new hashtable(6)


class hashtable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        } 
        return total % this.size;
    }
    set(key,value){
        let index=this.hash(key);
        if(this.table[index]===undefined){
            this.table[index]=[key,value]
        }else{
            while(this.table[index]!=undefined){
                index++
            }
        }
        this.table[index]=[key,value]
    }
    get(key){
        let index=this.hash(key);
        while(this.table[index]!=undefined){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index++;
        }
        return undefined;
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

}
let table=new hashtable(10)
table.set('name','afsal');
table.set('age',22);
table.set('id','bb33')
table.set('fish','mean')
table.set('mummy','sajeena')
table.display()
