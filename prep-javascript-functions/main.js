function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);

console.log('sum = ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(5);

console.log('Minutes = ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, LastName) {
  return firstName + ' ' + LastName;
}

console.log(getFullName('Johnny', 'Baltazar'));

function cube(number) {
  return number * number * number;
}

console.log(cube(5));
