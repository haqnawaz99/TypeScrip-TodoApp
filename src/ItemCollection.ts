import { Item } from "./Item";

export class ItemCollection{
    private nextId = 1;

    constructor(public items: Item[] = []){

    }

    public addTodo(task: string):void{
        let item: Item = new Item (this.nextId, task, false);
        this.nextId++;
        this.items.push(item);  
    }

    public printAll():void{ 
        this.items.forEach((item:Item) =>{
            item.printTask();
        })
    }

    /**
     * taskDone
     */
    public taskDone(taskId: number) {
        let item: Item = this.items.find((item)=>item.taskId == taskId);
        item.done = true;
    }
}