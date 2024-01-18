// //task1
let country = "Sweden";
let access = country === "Sweden" ? true : false;
console.log(access);

// //task2
let a = 10;
for (let i = 0; i < 10; i++) {
  console.log(a++);
}
console.log(a);

//task3
for (let i = 0; i <= 8; i += 2) {
  const b = parseInt(prompt("Введите число"));
  console.log(b === 10 ? "Равно 10" : "Не равно 10");
}
//task 4
let d = parseInt(
  prompt("Введите количество чисел  от 0 до 100 для возведения квадратов")
);
if (!isNaN(d) && d >= 0 && d < 100) {
  for (let i = 0; i < d; i++) {
    console.log(i * i);
  }
} else {
  console.log("Введите положительное число");
}

//task 5
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

//task 6
let i = 0;
while (i < 3) {
  alert(`number ${i}`);
  i++;
}

// //task 7
const minNum = parseInt(
  prompt("Введите минимальное число  от 0 до 100 для возведения квадратов")
);
const maxNum = parseInt(
  prompt("Введите максимальное число  от 0 до 100 для возведения квадратов")
);
function calcMinMax(minNum = 0, maxNum) {
  if (!maxNum) {
    console.log("максимальный диапазон не задан");
  }
  if (
    !isNaN(minNum) &&
    minNum >= 0 &&
    minNum < 100 &&
    !isNaN(maxNum) &&
    maxNum >= 0 &&
    maxNum < 100
  ) {
    for (let i = minNum; i < maxNum; i++) {
      console.log(i * i);
    }
  } else {
    console.log("Введите положительное число");
  }
}
calcMinMax(minNum, maxNum);

// task 7
const enterMinNum = parseInt(prompt("Введите минимальный диапазон "));
const enterMaxNum = parseInt(prompt("Введите максимальный диапазон "));

function calcMinMax(minNum, maxNum) {
  let result = [];
  if (!maxNum) {
    return "максимальный диапазон не задан";
  }
  if (
    !isNaN(minNum) &&
    minNum >= 0 &&
    minNum < 100 &&
    !isNaN(maxNum) &&
    maxNum >= 0 &&
    maxNum < 100
  ) {
    for (let i = minNum; i < maxNum; i++) {
      result.push(i * i);
    }
  } else {
    return "Введите положительное число";
  }
  return result;
}

let res = calcMinMax(enterMinNum, enterMaxNum);
console.log(res);
//task 8
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB(num1, num2, num3) {
  return (result = `rgb(${num1},${num2},${num3})`);
}
const randomNum1 = getRandomInteger(0, 255);
const randomNum2 = getRandomInteger(0, 255);
const randomNum3 = getRandomInteger(0, 255);
const result = getRandomRGB(randomNum1, randomNum2, randomNum3);
console.log(result);

//task 9
function someNum(num) {
  if (num > 0 && !isNaN(num)) {
    for (let i = 0; i < num; i = i + 0.5) {
      if (i % 1 == 0) {
        console.log(`${i} integer`);
      } else console.log(`${i} decimal`);
    }
  } else alert("Введите положительное число");
}

console.log(someNum(5));

//task 10

function calcPrice(dayRent) {
  const oneDay = 40;
  const maxDiscount = dayRent * oneDay - 50;
  const minDiscount = dayRent * oneDay - 20;

  if (dayRent >= 7 && !isNaN(dayRent)) {
    console.log(maxDiscount);
  } else if (!isNaN(dayRent) && dayRent >= 3 && dayRent < 7) {
    console.log(minDiscount);
  } else console.log(dayRent * oneDay);
}
console.log(calcPrice(2));
