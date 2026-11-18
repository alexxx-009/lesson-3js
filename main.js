console.log("Числа от 1 до 20")
for (let a = 1; a <= 20; a++) {
    console.log(a);
}

console.log("Числа от 20 до 1")
for (let b = 20; b >= 1; b--) {
    console.log(b);
}

console.log("Четные числа от 1 до 50")
for (let c = 2; c <=50; c += 2) {
    console.log(c);
}

console.log("Сумма чисел от 1 до 100")
let sum = 0;
for (let d = 1; d <= 100; d++) {
    sum = sum + d;
}
console.log(sum);

console.log("Квадрат")
for (let f = 1; f <= 10; f++) {
    console.log(f, "-", f * f);
}

console.log("Умножение на 5")
for (let g = 1; g <= 10; g++) {
    console.log("5 x", g, "=", 5 * g);
}

console.log("Сумма четных чисел от 1 до 50")
let som = 0;
for (let j = 2; j <= 50; j += 2) {
    som = som + j;
}
console.log(som)

console.log("Числа от 0 до 100 шаг 5")
for (let h = 0; h <= 100; h += 5) {
    console.log(h)
}

console.log("Деление на 7")
let count = 0;
for (let k = 1; k <= 100; k++) {
    if (k % 7 === 0) {
        count++;
    }
}
console.log(count);