export function normalize(first: string, second: number): string
export function normalize(first: number, second: string): string
export function normalize(first: any, second: any): string {
    if(typeof first === 'string'){
        return `${ first } ${ second }`
    }
    return `${ second } ${ first }`
}