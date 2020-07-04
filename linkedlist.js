// insertFirst, insertLast, remove, find

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        //Start at the head
        let currNode = this.head;
        //If the list is empty
        if (!this.head) {
            return null;
        }
        //Check for the item
        while (currNode.value !== item) {
            //Return null if it is the end of the list and
            //the item is not on the list.
            if (currNode.next === null) {
                return null;
            }
            else {
                //Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        //Found it
        return currNode;
    }
    
    remove(item) {
        //If the list is empty
        if (!this.head) {
            return null;
        }
        //If the node to be removed is head,
        //made the next node the head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //Start at the head
        let currNode = this.head;
        //Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(newItem, beforeItem) {
        if (this.head === null) {
            this.insertFirst(newItem);
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== beforeItem)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            this.insertLast(newItem);
            return;
        }

        const tempNode = new _Node(newItem, currNode);

        previousNode.next = tempNode;
    }

    insertAfter(newItem, afterItem) {
        if (this.head === null) {
            this.insertFirst(newItem);
            return;
        }

        let currNode = this.find(afterItem);

        if (currNode === null) {
            this.insertLast(newItem);
            return;
        }

        const tempNode = new _Node(newItem, currNode.next)

        currNode.next = tempNode
    }

    insertAt (item, position) {
        if (this.head === null) {
            this.insertFirst(item);
            return;
        }

        let currNode = this.head;
        let currPosition = 1;

        while (currPosition < position - 1) {
            currNode = currNode.next;
            currPosition = 1;
        }

        const tempNode = new _Node(item, currNode.next)

        currNode.next = tempNode
    }
}

function main() {
    const SLL = new LinkedList();

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Hello')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')

    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Hello')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')
}

console.log(main());

const newlist = main();

function display(newlist) {
    let output = '';
    let currNode = newlist.head;

    while (currNode !== null) {
        output += currNode.value
        if (currNode.next !== null) {
            output += ' ->'
        }
        currNode = currNode.next
    }
    return output
}
console.log(display(newlist))

const secondList = new LinkedList()
function isEmpty(secondList) {
    if(secondList.head === null) {
        return true
    } else {
        return false
    }
}

console.log(isEmpty(secondList))