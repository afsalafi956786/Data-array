// class Graph{
//     constructor(){
//         this.adjecentList={}
//     }
//     addVertex(vertex){
//         if(!this.adjecentList[vertex]) this.adjecentList[vertex]=[]
//     }
//     addEdge(v1,v2){
//         this.adjecentList[v1].push(v2);
//         this.adjecentList[v2].push(v1)
//     }
// }
// let g=new Graph() 


// g.addVertex('tokyo');
// g.addVertex('america');
// g.addVertex('india') 
// g.addEdge('tokyo','america');
// g.addEdge('india','america')
// console.log(g.adjecentList); 






// class Graph{
//     constructor(){
//         this.ajacencyList={}
//     }
//     addVertex(vertex){
//         if(!this.ajacencyList[vertex]) this.ajacencyList[vertex]=[]
//     }
//     addEdges(v1,v2){
//         this.ajacencyList[v1].push(v2);
//         this.ajacencyList[v2].push(v1)
//     }
//     removeEdge(vertex1,vertex2){
//         this.ajacencyList[vertex1]=this.ajacencyList[vertex1].filter(v=>v!==vertex2)
//         this.ajacencyList[vertex2]=this.ajacencyList[vertex2].filter(v=>v!==vertex1)
//     }
     
// }

// let g=new Graph();
// g.addVertex('Afsal')
// g.addVertex('Amal')
// g.addVertex('Aswin')

// g.addEdges('Afsal','Amal');
// g.addEdges('Afsal','Aswin');


// console.log(g.ajacencyList);
 

//directed order graph

// class Graph{
//     constructor(){
//         this.adjececyList={}
//     }
//     addVertex(vertex){
//         if(!this.adjececyList[vertex]) this.adjececyList[vertex]=[]

//     }
//     addEdges(v1,v2){
//         this.adjececyList[v1].push(v2)
//     }
// }
// let g=new Graph();
// g.addVertex('A')
// g.addVertex('B')
// g.addVertex('C')
// g.addEdges('A','B');
// g.addEdges('B','C')
// console.log(g.adjececyList);







