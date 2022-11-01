export interface IResponse {
    id: number,
    firstName: string,
    secondName: string,
    patronymic: string,
    status: number,
    dateStart: string,
    dateEnd: string,
    position: string,
    passport: object
}

export class Model{

    public get fullName(): string{
        return ''
    }

    constructor(response: IResponse) {
    }
}