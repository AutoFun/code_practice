// creating a node
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        } else{
            let current=this.first;
            this.first=newNode;
            newNode.next=current;
        }
        this.size++;
        return this
    }

    pop(){
        if(!this.first) return null;
        let temp=this.first;
        if(this.first==this.last){
            this.tail=null;
        } else{
            this.first=temp.next;
        }
        this.size--;
        return this;
    }
}

let stack = new Stack();

stack.push(6);

stack.push(5);

stack.push(4);

stack.push(3);




console.log(stack);.
/**
 * 
 * 
 * 
*/

class QueueNode {
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    
    enqueue(val){
        let newNode=new QueueNode(val);
        if(this.first){
            this.first=newNode;
            this.last=newNode;
        } else{
            let currentTail=this.last;
            currentTail.next=newNode;
            this.last=newNode;
        }
        this.size++;
        return this;
    }
    dequeue(){
        if(!this.first) return null;
        let temp=this.first;
        if(this.first===this.last){
            this.tail=null;
        } else{
            this.first=this.first.next;
        }
        this.size--;
    }   
}

let Queue=new Queue();


/**
 * reverse(){
 * let node=this.head;
 * this.head=this.tail;
 * this.tail=node;
 * let prev=null;
 * let next;
 * for(let i=0;i<this.length;i++){
 * next= node.next;
 * node.next=prev;
 * prev=node;
 * node=next;}
 * return this;}
 * 
 * 
 * 
*/


//  JS Datastructure Practice https://github.com/bhaskarbhoopendra/dataStructureWithJS
