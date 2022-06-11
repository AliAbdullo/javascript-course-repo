//Big O
const foo = (n) =>{
  if (n<=1) return;
  foo(n -1);
};

const bar = (n) => {
  if (n<=1) return;
  bar(n - 2);
};

