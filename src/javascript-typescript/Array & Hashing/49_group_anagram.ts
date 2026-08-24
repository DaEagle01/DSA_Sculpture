function groupAnagrams(words: string[]) {
  const map = new Map();
  for (let word of words) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  return map.values();
}


// console.log(groupAnagrams(["eat", "tea"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
// console.log(groupAnagrams(["listen", "silent", "enlist", "tinsel"])); // Expected output: [["listen", "silent", "enlist", "tinsel"]]
// console.log(groupAnagrams(["cat", "dog", "bird", "fish"])); // Expected output: [["cat"], ["dog"], ["bird"], ["fish"]]
