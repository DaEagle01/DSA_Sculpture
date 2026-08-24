function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (let ch of s) {
    if (['(', '{', '['].includes(ch)) stack.push(ch);
    else if (stack.pop() !== pairs[ch]) return false;
  }
  return stack.length === 0;
}

// ✅ Test cases
console.log(isValid("()"));        // true — simple valid pair
console.log(isValid("()[]{}"));    // true — multiple valid pairs
console.log(isValid("(]"));        // false — mismatched brackets
console.log(isValid("([)]"));      // false — incorrect nesting
console.log(isValid("{[]}"));      // true — properly nested
console.log(isValid("((({{{[[[]]]}}})))")); // true — deeply nested
console.log(isValid("((())"));     // false — missing closing bracket
console.log(isValid(""));          // true — empty string is valid
