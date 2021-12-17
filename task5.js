// Use Javascript built in array method called map and change inside previous exercise persons 
// variable all keys to uppercase

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

// variant a

function PeopleArray(array1, array2){
    return Array.from(new Set([].concat(array1, array2)))
}
newPeople = (PeopleArray(people.boys, people.girls)).map(elm => ({ "NAME": elm.name, "AGE": elm.age}));
console.log(newPeople);

// variant b
newPersons=persons.map(elm => ({ "NAME": elm.name, "AGE": elm.age}));
console.log(newPersons);