
// // Prints the vertex and adjacency list
// function printGraph() {
//   // get all the vertices
//   var get_keys = this.AdjList.keys();

//   // iterate over the vertices
//   for (var i of get_keys) {
//     // get the corresponding adjacency list
//     // for the vertex
//     var get_values = this.AdjList.get(i);
//     var conc = "";

//     // iterate over the adjacency list
//     // concatenate the values into a string
//     for (var j of get_values)
//       conc += j + " ";

//     // print the vertex and its adjacency list
//     console.log(i + " -> " + conc);
//   }
// }


// // Using the above implemented graph class
// var g = new Graph(6);
// var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//   g.addVertex(vertices[i]);
// }

// // adding edges
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// // prints all vertex and
// // its adjacency list
// // A -> B D E
// // B -> A C
// // C -> B E F
// // D -> A E
// // E -> A D F C
// // F -> E C
// g.printGraph();

// function // function to performs BFS
//   bfs(startingNode) {

//   // create a visited object
//   var visited = {};

//   // Create an object for queue
//   var q = new Queue();

//   // add the starting node to the queue
//   visited[startingNode] = true;
//   q.enqueue(startingNode);

//   // loop until queue is empty
//   while (!q.isEmpty()) {
//     // get the element from the queue
//     var getQueueElement = q.dequeue();

//     // passing the current vertex to callback function
//     console.log(getQueueElement);

//     // get the adjacent list for current vertex
//     var get_List = this.AdjList.get(getQueueElement);

//     // loop through the list and add the element to the
//     // queue if it is not processed yet
//     for (var i in get_List) {
//       var neigh = get_List[i];

//       if (!visited[neigh]) {
//         visited[neigh] = true;
//         q.enqueue(neigh);
//       }
//     }
//   }
// }