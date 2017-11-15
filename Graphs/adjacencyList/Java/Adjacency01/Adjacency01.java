import java.util.*;
 
public class Adjacency01 {
 
    public static void main(String[] args) {
        // empty dictionary
        HashMap<Integer, ArrayList<Integer>> adjLists_dict = new HashMap<Integer, ArrayList<Integer>>();
         
        // insert empty lists for each node
        int n = 6;
        for(int v=0; v<n; v++){
            adjLists_dict.put(v, new ArrayList<Integer>());
        }
         
        // insert (vertex, list) pairs into dictionary
        // insert neighbors into list for vertex 0
        adjLists_dict.get(0).add(1);
        adjLists_dict.get(0).add(2);
         
        // insert neighbors into list for vertex 1
        adjLists_dict.get(1).add(2);
        adjLists_dict.get(1).add(3);
 
        // insert neighbors into list for vertex 2
        adjLists_dict.get(2).add(4);
 
        // insert neighbors into list for vertex 3
        adjLists_dict.get(3).add(4);
        adjLists_dict.get(3).add(5);
 
        // insert neighbors into list for vertex 4
        adjLists_dict.get(4).add(5);
 
        // insert neighbors into list for vertex 5
        // -> nothing to do since 5 has no neighbors
         
         
        // testing
        System.out.println("Neighbors of vertex 0: " + adjLists_dict.get(0));
        System.out.println("Neighbors of vertex 3: " + adjLists_dict.get(3));
         
        System.out.println("\nPrint all adjacency lists with corresponding vertex:");
        for(int v=0; v<n; v++){
            System.out.println(v + ": " + adjLists_dict.get(v));
        }
         
    }
 
}


// Neighbors of vertex 0: [1, 2]
// Neighbors of vertex 3: [4, 5]

// Print all adjacency lists with corresponding vertex:
// 0: [1, 2]
// 1: [2, 3]
// 2: [4]
// 3: [4, 5]
// 4: [5]
// 5: []
