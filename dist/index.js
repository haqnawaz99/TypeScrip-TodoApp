"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemCollection_1 = require("./ItemCollection");
/*
let item: Item = new Item(1, "Buy Milk", false);
let item1: Item = new Item(1, "Drop Ali", false);
let item2: Item = new Item(1, "Call Musa", false);
let item3: Item = new Item(1, "Meeting", false);
let item4: Item = new Item(1, "Visit School", false);
item.printTask();
item1.printTask();
item2.printTask();
item3.printTask();
item4.printTask();
*/
let iCollection = new ItemCollection_1.ItemCollection();
iCollection.addTodo("Buy Milk");
iCollection.addTodo("Drop Ali");
iCollection.addTodo("Call Musa");
iCollection.addTodo("Meeting saad");
iCollection.addTodo("Visit School");
;
iCollection.taskDone(1);
iCollection.printAll();
