// 7.13 FIND THE FIRST OCCURRENCE OF A SUBSTRING

// A good string search algorithm is fundamental to the performance of many applications.
// Several clever algorithms have been proposed for string search, each with its
// own trade-offs. As a result, there is no single perfect answer. If someone asks you this
// question in an interview, the best way to approach this problem would be to work
// through one good algorithm in detail and discuss at a high level other algorithms.

// Given two stringss(the "search string") and t (the "text"), find the first occurrence of s in t.
// Hint: Form a signature from a string.

// Returns the index of the first character of the substring if found , -1
// otherwise.
export function rabinKarp(t: string, s: string): number {
    if (s.length > t.length) return -1;

    // naive hash fn

    // compute hash of s
    let sHash = 0;
    for (let char of s) {
        sHash += char.charCodeAt(0);
    }

    let tHash = 0;
    for (let i = 0; i < s.length; i++) tHash += t.charCodeAt(i);

    if (tHash === sHash && t.substr(0, s.length) === s) {
        return 0;
    }

    for (let i = 1; i <= t.length - s.length; i++) {
        // take out first char of prev
        tHash -= t.charCodeAt(i - 1);
        // add new char
        tHash += t.charCodeAt(i + s.length - 1);

        if (tHash === sHash && t.substr(i, s.length) === s) {
            return i;
        }
    }

    return -1;
}