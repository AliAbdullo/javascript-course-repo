//Big O
const foo = (n) =>{
  if (n<=1) return;
  foo(n -1);
};

const bar = (n) => {
  if (n<=1) return;
  bar(n - 2);
};

const dib = (n) => {
  if (n <= 1) return;
  dib(n -1);
  dib(n- 1);
};


const canSum = (targetSum,numbers) => {
  if (targetSum === 0 ) return true;
  if (targetSum < 0) return false;
  
  for (let num of numbers) {
    const reminder = targetSum - num;
    if (canSum(remainder, numbers) ===true) {
      return true;
    }
  }
  return false;
};


console.log(canSum(7,[2,3])); //true
