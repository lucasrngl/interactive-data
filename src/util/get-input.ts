import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function getInput(): Promise<number> {
  const rl = readline.createInterface({ input, output });
  let userInput: number;
  while (isNaN(userInput) || userInput < 1 || userInput > 5) {
    userInput = Number(await rl.question('Pick one: '));
  }
  console.log();
  rl.close();
  return userInput;
}
