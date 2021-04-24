class Stack{
    constructor(){
        this.stack=[];
    }
    push(elemento){
        this.stack.push(elemento);
        return this.stack;
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }
}