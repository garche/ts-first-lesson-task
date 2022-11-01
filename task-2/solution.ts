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

function filter(array: Array<FirstType | SecondType | ThirdType>, type: string) {
    return array.filter((x): x is FirstType | SecondType | ThirdType => {
        if (typeof x.prop1 === 'string' && Object.keys(x).length === 2 && type === 'FirstType') {
            return true;
        } else if (typeof x.prop1 === 'undefined' && Object.keys(x).length === 2 && type === 'SecondType') {
            return true;
        } else if (Object.keys(x).length === 3 && type === 'ThirdType') {
            return true;
        }

        return false;
    });
}
