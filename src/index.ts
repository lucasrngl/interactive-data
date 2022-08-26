import stack from './stack';
import queue from './queue';
import { getInput } from './util/get-input';

main();

export default async function main(): Promise<void> {
  menu();
  const input: number = await getInput();
  switch (input) {
    case 1:
      stack();
      break;
    case 2:
      queue();
      break;
    case 3:
    case 4:
    case 5:
      console.log('Exiting...');
      break;
  }
}

function menu(): void {
  console.log('#-- Data Structures --#');
  console.log('|                     |');
  console.log('|  1. Stack           |');
  console.log('|  2. Queue           |');
  console.log('|  3. Linked List     |');
  console.log('|  4. Tree            |');
  console.log('|  5. Exit            |');
  console.log('|                     |');
  console.log('#---------------------#');
  console.log();
}
