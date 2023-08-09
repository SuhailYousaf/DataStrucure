class Node {
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class Stack{
    constructor(){
        this.top=null;
    }
    Push(data){
        const newNode=new Node(data)
        if(this.top==null){
            this.top=newNode
        }else{
            newNode.next=this.top;
            this.top=newNode
        }
    }
    Pop(){
        if(this.top==null){
            console.log("stack is empty")
            return;
        }
        this.top=this.top.next
    }

    printList (){
        let current=this.top
        while(current!=null){
            console.log(current.data)
            current=current.next
        }
    }
    
}

const stack =new Stack()

stack.Push(1)
stack.Push(2)
stack.Push(3)
stack.printList()
stack.Pop()
stack.printList()
