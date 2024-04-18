#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk';
import axios from 'axios';

export function cli(args) {
    return new Promise((resolve, reject) => {
        try {
            run(args);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function printUsage() {
    console.log(`
Usage: wayback-finder --url <URL> --date <TARGET_DATE>
Options:
  --url, -u       URL to download from the Wayback Machine
  --date, -d      Target date to return the closest snapshot in YYYYMMDD format
`);
}

async function run(args) {
    const options = parseArgumentsIntoOptions(args);

    if (!options.url) {
        console.log(chalk.red.bold('Error:'), 'Need to provide a url');
        printUsage();
        return;
    }

    const { url, targetDate } = options;
    const closestSnapshot = await lookupUrl(url, targetDate);
    console.log(chalk.green.bold('Closest snapshot:'), closestSnapshot);
}

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--url': String, // Define --url as a string argument
            '--date': String, // Define --date as a string argument
            // Aliases
            '-u': '--url',
            '-d': '--date',
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        url: args['--url'],
        targetDate: args['--date'] || new Date().toISOString().slice(0, 10).replace(/-/g, ''),
    };
}

async function lookupUrl(url, targetDate) {
    console.log(`Looking up ${url} on ${targetDate}\n`);
    const response = await axios.get(
        `https://archive.org/wayback/available?url=${url}&timestamp=${targetDate}`
    );

    const closestSnapshot = response?.data?.archived_snapshots?.closest ?? null;
    if (!closestSnapshot) {
        console.log(chalk.red.bold('Error:'), 'No snapshot found');
        return;
    }

    return closestSnapshot.url;
}
