// Very basics of FP in JS

// Currying https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
const sum = (arg1) => (arg2) => arg1 + arg2;
const addTwo = sum(2);

// Purity https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976
const impureFunc = () => {
  window.someGlobalObj.item = 1;
};
const pureFuncOfSum = (a, b) => a + b;
const pureFuncOfDouble = (num) => num * 2;

// Side effect free https://en.wikipedia.org/wiki/Side_effect_(computer_science)
const sumWithSideEffect = (a, b) => {
  // Logging is side effect
  console.log(`The first arg is ${a}. The second arg is ${b}`);
  return a + b;
};
const logger = (...args) => {
  console.log(`The arguments are: ${args.join(', ')}`) 
  return args
}
const pipe = (...args) => x => args.reduce((acc, fn) => fn(acc), x)
pipe((a, b) => a + b, logger)(a, b)

// Composition
// g:           a => b
// f:                b => c
// h = f(g(a)): a    =>   c
const compose = (...args) => x => args.reduceRight((acc, fn) => fn(acc), x)
compose(addTwo, sum(2))(5) // sum(2)(5), addTwo(7) -> 9

// Immutable
const mutableState = { items: [] }
const mutatingReducer = (state = mutableState, action) => {
  if (action.type === "SET_ITEMS") state.items = action.payload
  return state
}

const immutableState = { items: [] } // Let's assume we can't re-assign props
const notMutatingReducer = (state = immutableState, action) => {
  if (action.type === "SET_ITEMS") return { ...state, items: action.payload } // returns new state obj instead of mutating
  return state
}