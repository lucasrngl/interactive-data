import Node from './Node';

export default class Queue<T> {
  private entryRef: Node<T>;

  constructor() {
    this.entryRef = null;
  }

  public isEmpty(): boolean {
    return this.entryRef === null;
  }

  public enqueue(element: T): void {
    const node: Node<T> = new Node(element);
    node.setNodeRef(this.entryRef);
    this.entryRef = node;
  }

  public dequeue(): string {
    if (this.isEmpty()) return null;
    let firstNode: Node<T> = this.entryRef;
    let auxNode = this.entryRef;
    while (true) {
      if (firstNode.getNodeRef() === null) {
        auxNode.setNodeRef(null);
        break;
      }
      auxNode = firstNode;
      firstNode = firstNode.getNodeRef();
    }
    return firstNode.toString();
  }

  public first(): string {
    if (this.isEmpty()) return null;
    let firstNode: Node<T> = this.entryRef;
    while (true) {
      if (firstNode.getNodeRef() === null) break;
      firstNode = firstNode.getNodeRef();
    }
    return firstNode.toString();
  }

  public toString(): string {
    let returnString: string = 'Queue {\n  ';
    let auxNode = this.entryRef;
    while (true) {
      if (auxNode === null) {
        returnString += 'null';
        break;
      }
      returnString += `[Node{data=${auxNode.getObject()}}]->`;
      auxNode = auxNode.getNodeRef();
    }
    returnString += '\n}';
    return returnString;
  }
}
