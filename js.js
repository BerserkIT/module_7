//Задание 7.6.1

let world = 'Довод';

function isPalindrom(word) {
    let normalized = word.toLowerCase().replace(/\s+/g, '');
    let result = normalized === normalized.split('').reverse().join('');
    if (result) {
        return `Слово "${word}" является палиндромом.`;
    } else {
        return `Слово "${word}" не является палиндромом.`;
    }
}

console.log(isPalindrom(world));

//Задание 7.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];

const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);


//Задание 7.6.3

let input = prompt("Введите любое число:");
let number = Number(input);

if (!isNaN(number) && number >= 0) {
    const result = Array.from({ length: number + 1 }, (_, i) => i);
    console.log(result);
} else {
    console.log("Пожалуйста, введите корректное число больше или равное 0.");
}

//Задание 7.6.4

const size = 3;
let field = '';

for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += (i + j) % 2 === 0 ? 'x' : 'o';
        if (j < size - 1) row += ' ';
    }
    field += row + '\n';
}
console.log(field);

//Задание 7.6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValues = [];

for (let key in obj) {
    let value = obj[key];
    if (Array.isArray(value)) {
        arrValues.push(...value);
    } else {
        arrValues.push(value);
    }
}

console.log(arrValues);
