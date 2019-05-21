# nanoid-cli

A tiny cli wrapper around [nanoid](https://github.com/ai/nanoid) to generate unique ids from the command line.

### Usage

```sh
$ nanoid
eftOYF0ie93F_yVhkOBcM
```

### Options

```
--alphabet, -a  Use a different alphabet to generate the id
--size, -s      Generate an id of a different size
--number, -n    Number of (new-line delimited) ids to generate
```

### Examples

```sh
$ nanoid
sBiU98ZmAHvICIOnUoxOW
```

```sh
$ nanoid --size 32
xgX77wBFcY1lso9R12Y2lHrluUbLjAPV
```

```sh
$ nanoid --alphabet "_~0123456789abcdefghijklmnopqrstuvwxyz"
6me9uz2j_blasac~0p5as
```

```sh
$ nanoid --number 3
00MbOR~aWAlTQJ1LITOpT
YfVfbz9OQJIzfz3siAEoj
s4cA7JjAGKSCiOhxELuKm
```