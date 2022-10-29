export interface User {
    type: string;
    name: string;
    age: number;
    occupation: string;
}

export interface Admin {
    type: string;
    name: string;
    age: number;
    role: string;
}

export function isUser(person: Person): person is User{

}

export function isAdmin(person: Person): person is Admin{

}


export type Person = User | Admin;

export function filterUsers(persons: Person[], criteria: User): User[] {

}