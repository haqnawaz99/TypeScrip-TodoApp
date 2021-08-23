export class Item{
    taskId:number;
    taskName:string;
    done:boolean;

    public constructor(taskId: number, taskName: string, done=false){
        this.taskId = taskId;
        this.taskName = taskName;
        this.done = done;
    }
}