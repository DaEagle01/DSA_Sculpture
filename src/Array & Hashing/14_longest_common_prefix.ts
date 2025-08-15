/* 
    14. Longest Common Prefix
    https://leetcode.com/problems/longest-common-prefix/description/
*/

// Solution 1
const longestCommonPrefix = (strs: string[]): string => {
    for (let i = 0; i < strs.length; i++) {
        if (strs[i][0] !== strs[0][0] || strs[i] === '') return '';
    }

    let prefix = strs[0];

    while (prefix.length) {
        let matchCount = 0;
        for (let i = 0; i < strs.length; i++) {
            if (!strs[i].startsWith(prefix)) {
                prefix = prefix.substring(0, prefix.length - 1);
            } else {
                matchCount++
            }
        }

        if (matchCount === strs.length) break;
    }

    return prefix;
};

//  Solution 2
const longestCommonPrefix2 = (strs: string[]): string => {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        console.log(strs[i]);
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            console.log(strs[i], prefix);
            if (!prefix) return "";
        }
    }

    return prefix;
};

console.log(longestCommonPrefix2(["flower", "flow", "flight"])); // 'fl'
// console.log(longestCommonPrefix2(["dog", "racecar", "car"])); // ''
// console.log(longestCommonPrefix2(["bat", "bag", "bank", "band"])); // 'ba'
// console.log(longestCommonPrefix2(["dance", "dag", "danger", "damage"])); // 'da'
// console.log(longestCommonPrefix2(["longestcommonprefix", "longestcommon", "longest"])); // 'longest'