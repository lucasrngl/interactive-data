import { getInput } from '../util/get-input';
import Queue from './Queue';
import mainMenu from '../index';

// const queue: Queue<number> = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);

// console.log(queue.toString());

// console.log(queue.dequeue());
// console.log(queue.toString());

// queue.enqueue(5);

// console.log(queue.toString());

// console.log(queue.first());

// console.log(queue.toString());

let value: number = 0;
const queue: Queue<number> = new Queue();

export default async function main() {
  menu();
  const input: number = await getInput();
  switch (input) {
    case 1:
      value++;
      queue.enqueue(value);
      console.log(`${queue}\n`);
      console.log('Item successfully added!\n');
      main();
      break;
    case 2:
      if (queue.isEmpty()) {
        console.log('The queue is empty.\nPlease add a new item.\n');
        main();
        break;
      }
      const dequeued = queue.dequeue();
      console.log(`${queue}\n`);
      console.log(`Item [${dequeued}] successfully removed!\n`);
      value = queue.isEmpty() ? 0 : value;
      main();
      break;
    case 3:
      if (queue.isEmpty()) {
        console.log('The queue is empty.\nPlease add a new item.\n');
        main();
        break;
      }
      console.log(`${queue}\n`);
      main();
      break;
    case 4:
      mainMenu();
      break;
    case 5:
      console.log('Exiting...');
      break;
  }
}

function menu(): void {
  console.log('#------------### Queue ###------------#');
  console.log('|                                     |');
  console.log('|  1. Add a new item to the Queue     |');
  console.log('|  2. Remove a item from the Queue    |');
  console.log('|  3. See the whole Queue             |');
  console.log('|  4. Back to main menu               |');
  console.log('|  5. Exit                            |');
  console.log('|                                     |');
  console.log('#-------------------------------------#\n');
}
