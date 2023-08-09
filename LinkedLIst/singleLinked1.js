class Node {
    constructor(data){
        
        this.data=data;
        this.next=null;

    }
}
class linkedlist{
    constructor(){
        this.head=null;
        this.tail =null;
        this.size=0;
    }
    
    addNode(data){
        const NewNode=new Node(data)
        let current=this.head;
        if(this.head==null){
            this.head=NewNode;
            this.tail=NewNode;
            this.size++
            return;
        }
        while(current.next!=null){
            current=current.next;
        }
        current.next=NewNode;
        this.tail=NewNode;
        this.size++;
    }
    printList(){
       let current=this.head;
       while(current!=null){
        console.log(current.data)
           current=current.next;
       }

    }


}

function convert(array){
    const linked= new linkedlist()
     for (i of array){
        linked.addNode(i)
     }
     linked.printList()
}

const array=[1,2,3]
convert(array)

