import assign from 'lodash.assign';

const a = 'a';
const b = 'b';

const foo = { a, b }

const bar = assign({ c: 'c' }, foo )

const { c } = bar;

console.log(c);

console.log("Hello World");