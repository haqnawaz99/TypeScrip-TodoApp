import { Item } from "./Item";

export class ItemCollection{
    private nextId = 1;
    private itemMap = new Map<number, Item>();

    constructor(public items: Item[] = []){

    }

    public addTodo(task: string):void{
        let item: Item = new Item (this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
        this.itemMap.set(this.nextId, new Item(this.nextId, task));  
    }

    getTodoById(id: number) : Item {
    return this.itemMap.get(id);
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