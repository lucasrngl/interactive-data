import { getInput } from '../util/get-input';
import Node from './Node';
import Stack from './Stack';
import mainMenu from '../index';

let value: number = 0;
const stack: Stack = new Stack();

export default async function main() {
  menu();
  const input: number = await getInput();
  switch (input) {
    case 1:
      value++;
      stack.push(new Node(value));
      console.log(`${stack}\n`);
      console.log('Item successfully added!\n');
      main();
      break;
    case 2:
      if (stack.isEmpty()) {
        console.log('The stack is empty.\nPlease add a new item.\n');
        main();
        break;
      }
      const poppedItem = stack.pop();
      console.log(`${stack}\n`);
      console.log(`Item [${poppedItem}] successfully removed!\n`);
      value = stack.isEmpty() ? 0 : value - 1;
      main();
      break;
    case 3:
      if (stack.isEmpty()) {
        console.log('The stack is empty.\nPlease add a new item.\n');
        main();
        break;
      }
      console.log(`${stack}\n`);
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
  console.log('#------------### Stack ###------------#');
  console.log('|                                     |');
  console.log('|  1. Add a new item to the Stack     |');
  console.log('|  2. Remove a item from the Stack    |');
  console.log('|  3. See the whole Stack             |');
  console.log('|  4. Back to main menu               |');
  console.log('|  5. Exit                            |');
  console.log('|                                     |');
  console.log('#-------------------------------------#\n');
}
