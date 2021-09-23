const person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'banjo playing'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is " + fullName + '.');

person.job = 'jerk';

console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'Amigo';

console.log("The person's previous job is: " + person.previousJob + '.');
console.log(person);
