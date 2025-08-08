 
const largeArray = Array.from({ length: 10000000 }, (_, i) => i % 5000000); // duplicates

console.time('Set');
{
  const seen = new Set();
  let found = false;
  for (const num of largeArray) {
    if (seen.has(num)) {
      found = true;
      break;
    }
    seen.add(num);
  }
}
console.timeEnd('Set');

console.time('Object');
{
  const seen = {};
  let found = false;
  for (const num of largeArray) {
    if (seen[num]) {
      found = true;
      break;
    }
    seen[num] = true;
  }
}
console.timeEnd('Object');
