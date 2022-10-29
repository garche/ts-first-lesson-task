export enum System {
    Linux = 0,
    Window = 1,
    MacOS = 2,
}

export type FirstType = {
    prop1: string,
    prop2: boolean,
}

export type SecondType = {
    prop1: typeof undefined,
    prop2: () => Date,
}

export type ThirdType = {
    prop1: string,
    prop2: boolean,
    prop3: System,
}

export function filter(array: Array<FirstType | SecondType | ThirdType>, type: string): Array<FirstType | SecondType | ThirdType> {
    return array
}
