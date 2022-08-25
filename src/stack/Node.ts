export default class Node {
  private data: number;
  private nodeRef: Node = null;

  public constructor(data: number) {
    this.data = data;
  }

  public getData(): number {
    return this.data;
  }

  public setData(data: number): void {
    this.data = data;
  }

  public getNodeRef(): Node {
    return this.nodeRef;
  }

  public setNodeRef(nodeRef: Node): void {
    this.nodeRef = nodeRef;
  }

  public toString(): string {
    return `Node{data=${this.data}}`;
  }
}
