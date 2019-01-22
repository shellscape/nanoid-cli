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

  Examples
    $ nanoid
    sBiU98ZmAHvICIOnUoxOW

    $ nanoid --size 32
    xgX77wBFcY1lso9R12Y2lHrluUbLjAPV

    $ nanoid --alphabet "_~0123456789abcdefghijklmnopqrstuvwxyz"
    6me9uz2j_blasac~0p5as
`, {
  flags: {
    alphabet: {
      type: 'string',
      alias: 'a'
    },
    size: {
      alias: 's'
    }
  }
});

function equivalent(strA, strB) {
  const arrA = strA.split('').sort();
  const arrB = strB.split('').sort();

  return JSON.stringify(arrA) === JSON.stringify(arrB);
}

const id = cli.flags.alphabet && !equivalent(cli.flags.alphabet, url)
  ? generate(cli.flags.alphabet, cli.flags.size || 21)
  : nanoid(cli.flags.size);

console.log(id);
