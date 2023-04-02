function longest(s1, s2) {
    s1 = (((s1+s2).split("")).sort()).join("");
    var s2 = "";
    for (i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            continue;
        } else {
            s2 += s1[i];
        }
    }
    return s2;
}

console.log(longest("aretheyhere", "yestheyarehere")); //, "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //, "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions")); //, "acefghilmnoprstuy")