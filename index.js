/** ---------------------------------------------------------------------------
 * @module    nordchalk
 * @description Provide shortcuts to chalk terminal colors matching the Nord theme from https://www.nordtheme.com/
 * @author  kevinmu <kevin.mulholland@bbc.co.uk>
  * @licence MIT
 */

// make sure we are checking for basic coding errors

'use strict';
'use esversion: 6';

const chalk = require('chalk');

// ---------------------------------------------------------------------------

const colors = [
  '#2e3440',
  '#3b4252',
  '#434c5e',
  '#4c566a',
  '#d8dee9',
  '#e5e9f0',
  '#eceff4',
  '#8fbcbb',
  '#88c0d0',
  '#81a1c1',
  '#5e81ac',
  '#bf616a',
  '#d08770',
  '#ebcb8b',
  '#a3be8c',
  '#b48ead'
];

const nord0 = chalk.hex(colors[0]);
const nord1 = chalk.hex(colors[1]);
const nord2 = chalk.hex(colors[2]);
const nord3 = chalk.hex(colors[3]);
const nord4 = chalk.hex(colors[4]);
const nord5 = chalk.hex(colors[5]);
const nord6 = chalk.hex(colors[6]);
const nord7 = chalk.hex(colors[7]);
const nord8 = chalk.hex(colors[8]);
const nord9 = chalk.hex(colors[9]);
const nord10 = chalk.hex(colors[10]);
const nord11 = chalk.hex(colors[11]);
const nord12 = chalk.hex(colors[12]);
const nord13 = chalk.hex(colors[13]);
const nord14 = chalk.hex(colors[14]);
const nord15 = chalk.hex(colors[15]);

const bgNord0 = chalk.bgHex(colors[0]);
const bgNord1 = chalk.bgHex(colors[1]);
const bgNord2 = chalk.bgHex(colors[2]);
const bgNord3 = chalk.bgHex(colors[3]);
const bgNord4 = chalk.bgHex(colors[4]);
const bgNord5 = chalk.bgHex(colors[5]);
const bgNord6 = chalk.bgHex(colors[6]);
const bgNord7 = chalk.bgHex(colors[7]);
const bgNord8 = chalk.bgHex(colors[8]);
const bgNord9 = chalk.bgHex(colors[9]);
const bgNord10 = chalk.bgHex(colors[10]);
const bgNord11 = chalk.bgHex(colors[11]);
const bgNord12 = chalk.bgHex(colors[12]);
const bgNord13 = chalk.bgHex(colors[13]);
const bgNord14 = chalk.bgHex(colors[14]);
const bgNord15 = chalk.bgHex(colors[15]);

// ---------------------------------------------------------------------------

module.exports = {

  nord0,
  nord1,
  nord2,
  nord3,
  nord4,
  nord5,
  nord6,
  nord7,
  nord8,
  nord9,
  nord10,
  nord11,
  nord12,
  nord13,
  nord14,
  nord15,

  bgNord0,
  bgNord1,
  bgNord2,
  bgNord3,
  bgNord4,
  bgNord5,
  bgNord6,
  bgNord7,
  bgNord8,
  bgNord9,
  bgNord10,
  bgNord11,
  bgNord12,
  bgNord13,
  bgNord14,
  bgNord15,

  polarnight0: nord0,
  polarnight1: nord1,
  polarnight2: nord2,
  polarnight3: nord3,

  bgPolarnight0: bgNord0,
  bgPolarnight1: bgNord1,
  bgPolarnight2: bgNord2,
  bgPolarnight3: bgNord3,

  snowstorm0: nord4,
  snowstorm1: nord5,
  snowstorm2: nord6,

  bgSnowstorm0: bgNord4,
  bgSnowstorm1: bgNord5,
  bgSnowstorm2: bgNord6,

  frost0: nord7,
  frost1: nord8,
  frost2: nord9,
  frost3: nord10,

  bgFrost0: bgNord7,
  bgFrost1: bgNord8,
  bgFrost2: bgNord9,
  bgFrost3: bgNord10,

  aurora0: nord11,
  aurora1: nord12,
  aurora2: nord13,
  aurora3: nord14,
  aurora4: nord15,

  bgAurora0: bgNord11,
  bgAurora1: bgNord12,
  bgAurora2: bgNord13,
  bgAurora3: bgNord14,
  bgAurora4: bgNord15
};
