// code here, goodluck!!
"use strict";

const prompt = require("prompt-sync")({ sigint: true });

function getValidNumberInput(promptMessage) {
    // looping akan berjalan, ketika sebuah nilai adalah true
    // 1. membuat sebuah looping
    while (true) {
        // 2. membuat variabel data untuk menampung pesan promptMessage
        const data = prompt(`${promptMessage}`);

        // 3. kondisinya adalah, promptMessage adalah string
        // maka kita harus konversi dari string to number
        const value = Number(data);

        // lakukan pengecekan, apakah dia number atau bukan?
        // dia bakal ngecheck apakah angka atau bukan
        // kalau angka, berarti true

        // isNaN("Hallo"); // true
        // isNaN(123) // false
        // isNaN("Taufik") // true
        // isNaN(400) // false

        // Number.IsNan("Hallo") // false
        // Number.IsNan(12345) // false
        // Number.IsNan(Nan) // true

        // ! negasi fungsinya untuk menjadikan suatu kondisi menjadi berbalik..
        // misal true jadi false... atau false jadi true...

        // const raw = "abc" // string
        // const value = Number(raw) // NaN
        // Number.isNan(value) // true

        // Number.IsNan(12345) // false (1)
        // Number.IsNan(Nan) // true  (2)

        // (1) => ! jadinya true
        // (2) => ! jadinya false

        // console.log(Number.isNaN(value));

        if (!Number.isNaN(value)) {
            return value;
        }

        console.log("Silahkan masukan angka yang benar!");

        // return; // untuk mengembalikan nilai + menghentikan looping
        // break;  // untuk menghentikan looping
    }
}

// input angka: Taufik
// angka salah, masukan angka yang benar: Taufik 1 (looping pertama)
// angka salah, masukan angka yang benar: Taufik 2 (looping kedua)
// angka salah, masukan angka yang benar: 100 (looping ketiga)
// "angka benar!!"

function getValidOperatorInput(promptMessage) {
    // menggunakan set untuk menghindari duplikasi
    const allowed = new Set(["+", "-", "*", "/", "%", "**"]); // set
    // const allowed2 = ["+", "-", "*", "/", "%", "**", "**"]; // array (ini bakal duplikasi)
    while (true) {
        // misal user input, + di tambah spasi // dia bakal jadi false
        // makanya menggunakan fungsi trim() untuk menghapus spasi
        const operator = prompt(`${promptMessage} (+, -, *, /, %, **): `).trim(); // +

        // fungsi has, untuk mengecek. apakah ada + di dalam variabel allowed
        // kalau misal ada, dia bakal jadi true, karena memang ada di variabel allowed
        if (allowed.has(operator)) {
            return operator; // untuk mengembalikan nilai + menghentikan looping
        }

        console.log(`Invalid operator. Pilih salah satu: (+, -, *, /, %, **)`);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    // // cara 1
    // if (b === 0) {
    //     return '"Error: Division by zero!"';
    // } else if (b === 0) {
    //     return '"Error: Division by zero!"';
    // } else if (b === 0) {
    //     return '"Error: Division by zero!"';
    // }

    // cara 2
    if (b === 0) return '"Error: Division by zero!"';
    //   else if (b === 0) return '"Error: Division by zero!"';
    //   else if (b === 0) return '"Error: Division by zero!"';
    //   else if (b === 0) return '"Error: Division by zero!"';

    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

// getValidNumberInput("Masukan sebuah angka: ");

while (true) {
    const a = getValidNumberInput("Masukan nomor pertama: ");
    const b = getValidNumberInput("Masukan nomor kedua: ");

    const operator = getValidOperatorInput("Masukan operator: ");

    let result;

    // contoh jika menggunakan IF ELSE
    //   if (operator == "+") result = add(a, b);
    //   else if (operator == "-") result = subtract(a, b);
    //   else if (operator == "-") result = subtract(a, b);
    //   else if (operator == "-") result = subtract(a, b);
    //   else if (operator == "-") result = subtract(a, b);
    //   else if (operator == "-") result = subtract(a, b);

    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        case "**":
            result = power(a, b);
            break;
        default:
            result = "Error: Unknown operator!";
    }

    console.log(`\n ${a} ${operator} ${b} = ${result}`);

    // untuk mengetahui variabel result, termasuk tipe data apa?
    const type = typeof result;

    if (type === "number") {
        // cara ke 1
        if (result > 0) console.log("Bilangan Positif");
        else if (result < 0) console.log("Bilangan Negatif");
        else console.log("Bilangan adalah 0");

        // untuk pengecekan bilangan
        const isInteger = Number.isInteger(result); // Dia bakal check, apakah integer atau bukan?
        console.log(`Apakah Integer? ${isInteger}`);

        // Ternary Operator
        const number = isInteger ?
            result % 2 === 0 ?
            "Even" :
            "Odd" :
            "Bilangan bukan integer";
        
        console.log(`Ini adalah bilangan: ${number}`)

        // logical operators
        // A = TRUE
        // B = TRUE
        // C = TRUE
        // D = FALSE
        // && => semuanya harus TRUE untuk menghasilkan TRUE
        // || => ketika salah satunya adalah TRUE, berarti hasilnya TRUE

        // (A && B) || (C && D) = TRUE || FALSE = TRUE
        // (A && B) && (C || D) = TRUE && TRUE = TRUE
        // (A || B) && (C && D) = TRUE && FALSE = FALSE

        const positiveAndEven = (result > 0 && isInteger && result % 2 === 0) || false

        if(positiveAndEven) console.log(`Bilangan ini adalah, bilangan positif dan juga genap`)

        // cara ke 2
        // if (result > 0) {
        //   console.log("Bilangan Positif");
        // } else if (result < 0) {
        //   console.log("Bilangan Negatif");
        // } else {
        //   console.log("Bilangan adalah 0");
        // }
    } else if (type == "string") {
        console.log(`Ini bukan number: ${result}`);
    } else {
        const message = (result ?? "Result is undefined or null, something went wrong!")
        console.log(message)
    }

    // Exit Mechanisme
    // trim() => untuk menghapus spasi di dalam suatu text
    // toLowerCase => untuk mengubah text kapital menjadi huruf kecil. 
    // misal TAUFIK => taufik (kalau pakai toLowerCase)
    const again = prompt('Apakah ingin menghitung kalkulasi angka yang lain? (yes/no): ').trim().toLowerCase()

    if (again === "no") {
        console.log(`Terimakasih telah menggunakan tools kalkulator ini! ^^`)
        break;
    }
}

// function testing() {
//     // misalkan pake ==  (dia hanya mengecek angkanya aja, tapi tidak dengan tipe datanya)
//     let a = "10" // string
//     let b = 10 // number

//     console.log(a == b) // true

//     // misalkan pake ===  (dia mengecek angkanya dan juga tipe datanya)
//     let c = "10" // string
//     let d = 10 // number

//     // tipe data dan juga nilai harus sama sama persis...
//     // misal 10 dengan 10 sama
//     // tapi beda tipe data.. berarti bakal false

//     console.log(c === d) // false

// }

// testing()