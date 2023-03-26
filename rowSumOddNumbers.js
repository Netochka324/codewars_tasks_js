function rowSumOddNumbers(n) {
	a = n * (n-1) + 1;
    b = a + 2 * (n-1);
    var mylist = [];
    for (i = 0; i < n; i++) {
        mylist[i] = a + i * 2;
    }
    return mylist.reduce((partialSum, a) => partialSum + a, 0);
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(42));