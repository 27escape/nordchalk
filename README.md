# Nordchalk

This mashup of [chalk](https://www.npmjs.com/package/chalk) and [Nord](https://www.nordtheme.com/) exists to make it easier to use Nord theme colors when creating command line applications. Its a thin wrapper around chalk, you may be able to manage without it. Nordchalk is not affliated with either of these projects.


## Install

```console
$ npm install nordchalk
```

## Usage

```js
const nordchalk = require( 'nordchalk');

console.log( nordchalk.aurora0( 'Hello world!'));
```

As it is a thin wrapper around chalk, you still have access to all of the chalk extras but these need to come **AFTER** the color name.

```js
const nordchalk = require( 'nordchalk');

console.log( nordchalk.aurora0.bold( 'Hello world!'));
```

I will often assign the colors to a variable that better describes its use and this makes it easier to change the colors if I need to

```js
const nordchalk = require( 'nordchalk');
const error = nordchalk.aurora0.bold ;
const warning = nordchalk.aurora1 ;

console.log( warning( 'Things are starting to look bad'));
console.log( error( 'Oh Noes, its all broken!'));
```

## Colors available

* The full pallette ```nord0 .. nord15```, background colors ```bgNord0 .. bgNord15```
* Polar Night ```polarnight0 .. polarnight3```, background colors ```bgPolarnight0 .. bgPolarnight3```
* Snow Storm ```snowstorm0 .. snowstorm2```, background colors ```bgSnowstorm0 .. bgSnowstorm2```
* Frost ```frost0 .. frost3```, background colors ```bgFrost0 .. bgFrost3```
* Aurora ```aurora0 .. aurora4```, background colors ```bgAurora0 .. bgAurora4```







