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

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';


export type Person = User | Admin;

export function filterUsers(persons: Person[], criteria: any): User[] {

}