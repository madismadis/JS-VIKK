// Use Javascript built in array method called reduce and calculate total age of persons

const persons = [
    { name: 'Julia', age: 27},
    { name: 'Martin', age: 45},
    { name: 'Taavi', age: 17},
    { name: 'Emma', age: 2},
    { name: 'Ricky', age: 62}
 ];

const totalSumOfAges = persons.reduce((sum, li) => sum + li.age, 0);

console.log(totalSumOfAges)