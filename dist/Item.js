"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(taskId, taskName, done = false) {
        //compiler will generate all code variables and assignments
        this.taskId = taskId;
        this.taskName = taskName;
        this.done = done;
    }
    printTask() {
        console.log(`id=${this.taskId}, \t Name = ${this.taskName}, \t Done = ${this.done}`);
    }
}
exports.Item = Item;
