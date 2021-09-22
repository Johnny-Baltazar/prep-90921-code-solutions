const person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'banjo playing'
};

console.log(person);
console.log("The person's name is " + person.firstName + ' ' + person.lastName + '.');

person.job = 'jerk';

console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'Amigo';

console.log("The person's previous job is: " + person.previousJob + '.');
console.log(person);
