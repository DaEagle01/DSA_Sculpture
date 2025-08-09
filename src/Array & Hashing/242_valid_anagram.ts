// Solution 1
const isAnagramUsingObject = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const alphabets: { [key: string]: number } = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < s.length; i++) {
    alphabets[s[i]] += 1;
    alphabets[t[i]] -= 1;
  }

  return Object.values(alphabets).every((item) => item === 0);
};

// Solution 2
const isAnagramUsingArray = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97] += 1;
    freq[t.charCodeAt(i) - 97] -= 1;
  }

  return freq.every((item) => item === 0);
};

console.log(isAnagramUsingArray("racecar", "carrace"));
console.log(isAnagramUsingArray("jar", "jam"));
console.log(isAnagramUsingArray("nagaram", "anagram"));
console.log(isAnagramUsingArray("rat", "car"));
