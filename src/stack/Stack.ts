import Node from './Node';

export default class Stack {
  private entryRef: Node;

  constructor() {
    this.entryRef = null;
  }

  public isEmpty(): boolean {
    return this.entryRef === null;
  }

  public top(): Node {
    return this.entryRef;
  }

  public push(node: Node): void {
    const auxRef: Node = this.entryRef;
    this.entryRef = node;
    this.entryRef.setNodeRef(auxRef);
  }

  public pop(): string {
    if (this.isEmpty()) return null;
    const nodePopped: Node = this.entryRef;
    this.entryRef = this.entryRef.getNodeRef();
    return nodePopped.toString();
  }

  public toString(): string {
    let returnString: string = 'Stack {\n';
    let auxNode = this.entryRef;
    while (true) {
      if (auxNode === null) break;
      returnString += `  [Node{data=${auxNode.getData()}}]\n`;
      auxNode = auxNode.getNodeRef();
    }
    returnString += '}';
    return returnString;
  }
}
