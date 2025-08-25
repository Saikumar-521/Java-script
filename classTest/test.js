let a = 5;
let sum = 0;
while (a > 0) {
    sum += a;
    a--;
}
console.log(sum);

let s = 0;
for (let i = 0; i <= 5; s += i, i++);
console.log(s);


let t = 2;
for (let i = 1; i <= 10; i++)
    console.log(`${t} * ${i} = ${t * i}`);

let userValue = 5;
for (let i = 1; i <= userValue; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${j * i}`);
    }
}

let value = 5;
for (let i = 1; i <= value; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
        s += j;
    }
    console.log(s);
}

for (let i = 0; i < value; i++) {
    let s = "";
    for (let j = 0; j <= i; j++) {
        s += "*";
    }
    console.log(s);
}

for (let i = 0; i < value; i++) {
    let s = "";
    for (j = value; j >= 0; j--) {
        if (i < j)
            s += "  ";
        else
            s += "* ";
    }
    console.log(s);
}


for (let i = 1; i <= value; i++) {
    let s;
    for (let j = 0; j <= value - 1; j++)
        s += " ";
    for (let k = 0; k <= i; k++)
        s += "*";
    console.log(s);
}