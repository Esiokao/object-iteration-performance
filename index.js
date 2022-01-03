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

// 6. ES6 seperator

const spread = obj => {
  const _length = Object.keys(obj).length ?? 0;
  console.time(`spread -${_length}`);
  const newObj = { ...obj };
  console.timeEnd(`spread -${_length}`);
};

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

// 8.Object.fromEntries

const fromEntries = obj => {
  const _length = Object.keys(obj).length ?? 0;

  console.time(`fromEntries-${_length}`);
  const newObj = Object.fromEntries(Object.entries(obj));
  console.timeEnd(`fromEntries-${_length}`);
};

const testObjects = [obj1, obj10, obj100, obj1000];
const testFuncs = [forLoop, forOf, forIn, whileLoop, keys, spread, entries, fromEntries];
const test = (testFuncs = testFuncs, testArgs = testObjects, ...args) => {
  testFuncs.forEach(testFunc => {
    testArgs.forEach(testArg => {
      testFunc(testArg);
    });
    console.log('------------------------------');
  });
};
test(testFuncs, testObjects);
