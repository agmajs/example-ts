import { Command } from '@agmajs/core'

export default new Command({
  name: 'greeting',
  aliases: ['hello'],
  run: ({ chat }, args) => {
    
    // First argument passed being the name.
    chat.set(`Hello, ${args[0]}`);
  }
})