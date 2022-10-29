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

export type Person = User | Admin;


export function filterUsers(persons: Person[], criteria: User): User[] {

}