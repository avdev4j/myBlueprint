#!/usr/bin/env node

const p = require('path');
const chalk = require('chalk');

function generateJHipsterPath(relativePath) {
    const absolutePath = p.join(__dirname, relativePath);
    return p.normalize(absolutePath);
}

function initArguments(...args) {
    const inputArgs = _removeNodeArgsInProcessArgv();

    return args.concat(inputArgs);
}

function _removeNodeArgsInProcessArgv() {
    return process.argv ? process.argv.slice(2) : [];
}

function printBanner() {
    /* eslint-disable no-console */
    console.log('\n');
    console.log(`${chalk.yellow('Welcome to myBlueprint JHipster Generator')}\n`);

    console.log('This CLI will call JHipster with myBlueprint blueprint for you. You could use all JHipster CLI options.\n');

    console.log(`${chalk.redBright('Ready ?... ')}${chalk.blueBright("Let's go!")}\n`);

    console.log(
        chalk.green(' _______________________________________________________________________________________________________________\n')
    );
    /* eslint-enable no-console */
}

module.exports = {
    generateJHipsterPath,
    initArguments,
    printBanner
};
