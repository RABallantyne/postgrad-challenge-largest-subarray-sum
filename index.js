//brute force: O(n^2)

// const largestSubarraySum = array => {
//   let max = 0;
//   for (let i = 0; i < array.length; i++) {
//     let current = 0;
//     for (let j = i; j < array.length; j++) {
//       current += array[j];
//       if (current > max) max = current;
//     }
//   }
//   return max;
// };

//One pass, O(n)

const largestSubarraySum = array => {
  let max = 0;
  let current = 0;
  array.forEach(i => {
    current += i;
    if (current > max) max = current;
    if (current < 0) current = 0;
  });
  return max;
};
