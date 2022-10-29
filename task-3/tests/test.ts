import { filterUsers, isAdmin, isUser, Person, User } from '../task';

const persons: Person[] = [
    {
        type: 'user',
        name: 'Max Mustermann',
        age: 23,
        occupation: 'Chimney sweep'
    },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];


let property: string = 'age'
let value: any = 23


/**
 * test1
 */

console.log(!isAdmin(persons[0]))

/**
 * test2
 */

console.log(isUser(persons[0]))

/**
 * test3
 */

let test: boolean[] = filterUsers(
    persons,
    {
        age: 23
    }
).map((user: User) => isUser(user) && user[property] === value)
    .filter((result: boolean) => result === false);

if(!test.length){
    console.log(true)
}
else{
    console.log(false)
}

/**
 * test4
 */

property = 'name'
value = 'Jane Doe'

test = filterUsers(
    persons,
    {
        name: 'Jane Doe'
    }
).map((user: User) => isUser(user) && user[property] === value)
    .filter((result: boolean) => result === false);

if(!test.length){
    console.log(true)
}
else{
    console.log(false)
}

/**
 * test5
 */

const propertyList: string[] = ['age','name']
const valueList: any[] = [23, 'Max Mustermann']

test = filterUsers(
    persons,
    {
        age: 23,
        name: 'Max Mustermann'
    }
).map((user: User) => {
    return  isUser(user) &&
        user[propertyList[0]] === valueList[0] &&
        user[propertyList[1]] === valueList[1]
})
    .filter((result: boolean) => result === false);