/* 
    3. Longest Substring Without Repeating Characters
    https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
*/

const lengthOfLongestSubstring = (s: string): number => {

    return 4
};

function getLog(s: string) {
    return lengthOfLongestSubstring(s);
}

console.log({
    "abcabcbb": getLog("abcabcbb"),       // 3
    "bbbbb": getLog("bbbbb"),             // 1
    "pwwkew": getLog("pwwkew"),           // 3
    "": getLog(""),                        // 0
    "a": getLog("a"),                      // 1
    "aa": getLog("aa"),                    // 1
    "ab": getLog("ab"),                    // 2
    " ": getLog(" "),                      // 1
    "dvdf": getLog("dvdf"),                // 3
    "anviaj": getLog("anviaj"),            // 5
    "tmmzuxt": getLog("tmmzuxt"),          // 5
    "123456789": getLog("123456789"),      // 9
    "112233!!": getLog("112233!!"),        // 2
    "a!b@c#d$": getLog("a!b@c#d$"),        // 8
    "abababab": getLog("abababab"),        // 2
    "abcdeabcde": getLog("abcdeabcde")     // 5
});
