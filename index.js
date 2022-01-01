// 4 diff length of object : 1k, 10k, 100k, 1000k;
console.log('------------------------');
const obj1 = {};
const obj10 = {};
const obj100 = {};
const obj1000 = {};

for (let i = 0; i < 1000000; i += 1) {
  obj1000[i] = 1;
  if (i < 100000) obj100[i] = 1;
  if (i < 10000) obj10[i] = 1;
  if (i < 1000) obj1[i] = 1;
}

// 1. for-loop
const forLoop = obj => {
  const _length = Object.keys(obj).length ?? 0;
  const newObj = {};
  console.time(`for-loop-${_length}`);
  for (let i = 0; i < _length; i += 1) {
    newObj[i] = obj[i];
  }
  console.timeEnd(`for-loop-${_length}`);
};

forLoop(obj1);
forLoop(obj10);
forLoop(obj100);
forLoop(obj1000);

console.log('------------------------');
// 2. for-of
const forOf = obj => {
  const _length = Object.keys(obj).length ?? 0;
  const newObj = {};
  console.time(`for-of-${_length}`);
  for (const i of Object.values(obj)) {
    newObj[i] = i;
  }
  console.timeEnd(`for-of-${_length}`);
};

forOf(obj1);
forOf(obj10);
forOf(obj100);
forOf(obj1000);
console.log('------------------------');
// 3. for-in
const forIn = obj => {
  const _length = Object.keys(obj).length ?? 0;
  const newObj = {};
  console.time(`for-in-${_length}`);
  for (const i in obj) {
    newObj[i] = obj[i];
  }
  console.timeEnd(`for-in-${_length}`);
};
forIn(obj1);
forIn(obj10);
forIn(obj100);
forIn(obj1000);
console.log('------------------------');
// 4. while-loop

const whileLoop = obj => {
  const _length = Object.keys(obj).length ?? 0;
  const newObj = {};
  let index = _length;
  console.time(`while-loop-${_length}`);
  while (index) {
    newObj[index] = obj[index];
    index -= 1;
  }
  console.timeEnd(`while-loop-${_length}`);
};

whileLoop(obj1);
whileLoop(obj10);
whileLoop(obj100);
whileLoop(obj1000);
console.log('------------------------');
// 5. Object.keys().foreach()

const keys = obj => {
  const _length = Object.keys(obj).length ?? 0;
  const newObj = {};
  console.time(`keys-forEach-${_length}`);
  Object.keys(obj).forEach(index => {
    newObj[index] = obj[index];
  });
  console.timeEnd(`keys-forEach-${_length}`);
};

keys(obj1);
keys(obj10);
keys(obj100);
keys(obj1000);
console.log('------------------------');

// 6. ES6 seperator

const spread = obj => {
  const _length = Object.keys(obj).length ?? 0;
  console.time(`spread -${_length}`);
  const newObj = { ...obj };
  console.timeEnd(`spread -${_length}`);
};

spread(obj1);
spread(obj10);
spread(obj100);
spread(obj1000);
console.log('------------------------');

// 7. for-of with entries

const entries = obj => {
  const _length = Object.keys(obj).length ?? 0;
  const newObj = {};
  console.time(`entries -${_length}`);
  for (const [index, value] of Object.entries(obj)) {
    newObj[index] = value;
  }
  console.timeEnd(`entries -${_length}`);
};

entries(obj1);
entries(obj10);
entries(obj100);
entries(obj1000);
console.log('------------------------');
// 8.Object.fromEntries

const fromEntries = obj => {
  const _length = Object.keys(obj).length ?? 0;

  console.time(`fromEntries-${_length}`);
  const newObj = Object.fromEntries(Object.entries(obj));
  console.timeEnd(`fromEntries-${_length}`);
};

fromEntries(obj1);
fromEntries(obj10);
fromEntries(obj100);
fromEntries(obj1000);
console.log('------------------------');
