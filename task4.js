// (1) Use Javascript built in array method called filter and filter out boy and girl name 
// (2) Bonus: filter out also boys and girls who are younger than 30

const persons = [
    { 
    name: 'Julia',
    age: 27
    },
    {
    name: 'Martin',
    age: 45
    },
    {
    name: 'Taavi',
    age: 17
    },
    {
    name: 'Emma',
    age: 2
    },
    {
    name: 'Ricky',
    age: 62
    } 
]

const boyNames = ['Martin', 'Taavi', 'Ricky']
const girlNames = ['Julia', 'Emma']

const people = {
    boys: persons.filter((boys) => boyNames.includes(boys.name)),
    girls: persons.filter((girls) => girlNames.includes(girls.name))
    };

console.log(people)
