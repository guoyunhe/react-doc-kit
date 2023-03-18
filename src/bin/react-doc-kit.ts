#!/usr/bin/env node

import { Command } from 'commander';
import { build } from '../actions/build';
import { start } from '../actions/start';

const program = new Command('doc-kit');

program.description('Generate document website from Markdown files');

program
  .command('start')
  .description('Start document dev server')
  .option('--port <number>', 'HTTP port of dev server')
  .action(start);

program.command('build').description('Build document assets').action(build);

program.helpOption('-h, --help', 'Show full help');
program.addHelpCommand('help [command]', 'Show help of a command');

program.version(PACKAGE_VERSION, '-v, --version', 'Show version number');

program.parse();
