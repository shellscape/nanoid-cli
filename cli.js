#!/usr/bin/env node

const meow = require('meow');

const nanoid = require('nanoid');
const generate = require('nanoid/generate');
const url = require('nanoid/url');

const cli = meow(`
  Usage
    $ nanoid

  Options
    --alphabet, -a  Use a different alphabet to generate the id
    --size, -s      Generate an id of a different size
    --number, -n    Number of (new-line delimited) ids to generate

  Examples
    $ nanoid
    sBiU98ZmAHvICIOnUoxOW

    $ nanoid --size 32
    xgX77wBFcY1lso9R12Y2lHrluUbLjAPV

    $ nanoid --alphabet "_~0123456789abcdefghijklmnopqrstuvwxyz"
    6me9uz2j_blasac~0p5as

    $ nanoid --number 3
    00MbOR~aWAlTQJ1LITOpT
    YfVfbz9OQJIzfz3siAEoj
    s4cA7JjAGKSCiOhxELuKm
`, {
  flags: {
    alphabet: {
      type: 'string',
      alias: 'a'
    },
    size: {
      alias: 's'
    },
    number: {
      alias: 'n'
    }
  }
});

function equivalent(strA, strB) {
  const arrA = strA.split('').sort();
  const arrB = strB.split('').sort();

  return JSON.stringify(arrA) === JSON.stringify(arrB);
}

const n = cli.flags.number || 1;
const ids = [];
if (cli.flags.alphabet && !equivalent(cli.flags.alphabet, url)) {
  for (let i = 0; i < n; i++) {
    ids.push(generate(cli.flags.alphabet, cli.flags.size || 21));
  }
} else {
  for (let i = 0; i < n; i++) {
    ids.push(nanoid(cli.flags.size));
  }
}

process.stdout.write(`${ids.join('\n')}\n`);
