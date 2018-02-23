import test from 'ava';
import execa from 'execa';

test('prints version number', async (t) => {
  const { stdout } = await execa('./cli.js', ['--version']);

  t.true(stdout.length > 0);
});

test('generates id of length 21', async (t) => {
  const { stdout } = await execa('./cli.js');

  t.true(stdout.length === 21);
});

test('respects the size option', async (t) => {
  const { stdout } = await execa('./cli.js', ['--size', '32']);

  t.true(stdout.length === 32);
});

test('respects the alphabet option', async (t) => {
  const { stdout } = await execa('./cli.js', ['--alphabet', 'abcdefghijklmnopqrstuvwxyz']);

  t.false(/[^a-z]/.test(stdout));
});
