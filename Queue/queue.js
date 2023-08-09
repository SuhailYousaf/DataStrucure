class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }
   
    Enqueue(data){
        const newNode=new Node(data)
        if(this.rear==null){
          this.front=this.rear=newNode
          return
        }
        this.rear.next=newNode;
        this.rear=newNode;
    }
    Dequeue(){
        if(this.front==null){
            console.log("The queue is empty")
            return;
        }
        this.front=this.front.next
    }

    printList(){
       let current=this.front; 
       while(current!=null){
        console.log(current.data)
        current=current.next
       }
    }

}
const queue=  new Queue()
queue.Enqueue(1)
queue.Enqueue(2)
queue.Enqueue(3)
queue.Dequeue()
queue.printList()