function groupAnagrams(strs: string[]): string[][] {
  if (strs.length < 1) return [];
  if (strs.length === 1) return [strs];

  const result: string[] = [];
  const freqStore = new Array(strs.length).fill(new Array(26).fill(0));

  for (let i = 0; i < strs.length; i++) {
    const freq = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      freq[strs[i].charCodeAt(j) - 97] += 1;
    }
    freqStore[i] = freq;
  }
  console.log(freqStore);

  return [["a"]];
}

// console.log(groupAnagrams(["eat", "tea"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
// console.log(groupAnagrams(["listen", "silent", "enlist", "tinsel"])); // Expected output: [["listen", "silent", "enlist", "tinsel"]]
// console.log(groupAnagrams(["cat", "dog", "bird", "fish"])); // Expected output: [["cat"], ["dog"], ["bird"], ["fish"]]
