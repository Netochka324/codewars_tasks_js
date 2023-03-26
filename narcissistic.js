function narcissistic(value) {
    let valueText = String(value);
    let n = valueText.length;
    let s = 0;
    for (i = 0; i < n; i++) {
        s += Number(valueText[i]) ** n; 
    }
    return value === s;
  }
console.log(narcissistic(153)); // 153
console.log(narcissistic(1652));
console.log(narcissistic(7)); //, true);
console.log(narcissistic(153));//, true);
console.log(narcissistic(122));//, false);
console.log(narcissistic(487));//, false);