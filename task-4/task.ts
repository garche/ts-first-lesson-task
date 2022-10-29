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

    constructor(reponse: IResponse) {
    }

    public getFullName(): string{
        return ''
    }
}