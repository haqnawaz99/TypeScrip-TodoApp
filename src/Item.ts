export class Item{


    public constructor(public taskId: number,public taskName: string, public done=false){
        //compiler will generate all code variables and assignments

    }

    public printTask():void{
        console.log(`id=${this.taskId}, \t Name = ${this.taskName}, \t Done = ${this.done}`)
    }
}