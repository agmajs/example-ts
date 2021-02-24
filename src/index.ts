import { Core } from '@agmajs/core';

const Script = new Core();

import { default as commands } from './commands'
commands.forEach(command => Script.addCommand(command.default));