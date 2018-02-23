import test from 'ava';
import execa from 'execa';

test('generates an id', async (t) => {
  const { stdout } = await execa('./cli.js');

  t.true(stdout.length > 0);
});

test('respects the size option', async (t) => {
  const { stdout } = await execa('./cli.js', ['--size', '32']);

  t.true(stdout.length === 32);
});

test('respects the alphabet option', async (t) => {
  const { stdout } = await execa('./cli.js', ['--alphabet', 'abcdefghijklmnopqrstuvwxyz']);

  t.false(/[^a-z]/.test(stdout));
});
