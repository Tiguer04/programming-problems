class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Obtenemos los datos desde dos arreglos.
const list1  = [1, 2, 4];
const list2  = [1, 3, 4];

// Creamos las LinkedList de cada arreglo junto con su puntero.
let linkedList1 = new ListNode(list1[0]);
let currentList1 = linkedList1;

let linkedList2 = new ListNode(list2[0]);
let currentList2 = linkedList2;

// Iteramos a lo largo del arreglo, mientras el puntero marca el siguiente nodo.
for(let i = 1; i < list1.length; i++){
  currentList1.next = new ListNode(list1[i]); 
  currentList1 = currentList1.next;
}

for(let i = 1; i < list2.length; i++){
  currentList2.next = new ListNode(list2[i]); 
  currentList2 = currentList2.next;
}

// En este punto LinkedList1 y LinkedList2 ya tienen todo el contenido del arreglo
// pero con la estructura de la clase ListNode.

function mergeTwoLists(list1, list2) {

  let dummy = new ListNode(0); // Esta es la LinkedList dónde almacenaremos los valores en orden.
  let current = dummy; // Este es el puntero, se va moviendo a lo largo de las LinkedLists.

  while(list1 !== null && list2 !== null){

    if(list1.val <= list2.val){
      current.next = list1;
      list1 = list1.next;
    } else{
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next; // Movemos el puntero hacia al frente.
    
  }

  current.next  = list1 !== null ? list1 : list2;

  return dummy.next; // Retornamos la LikedList inicial omitiendo el valor 0.

};

console.log(mergeTwoLists(linkedList1, linkedList2)); 