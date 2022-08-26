export default class Node<T> {
  private object: T;
  private nodeRef: Node<T> = null;

  constructor(object: T) {
    this.object = object;
  }

  public getObject(): T {
    return this.object;
  }

  public setObject(object: T): void {
    this.object = object;
  }

  public getNodeRef(): Node<T> {
    return this.nodeRef;
  }

  public setNodeRef(nodeRef: Node<T>): void {
    this.nodeRef = nodeRef;
  }

  public toString(): string {
    return `Node{object=${this.object}}`;
  }
}
