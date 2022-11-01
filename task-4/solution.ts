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

export interface IPassport {
    series: string
    number: string,
    issuedBy: string,
    issuingDate: string,
    issuerDepartmentCode: string,
    birthPlace: string,
}

export enum StatusEnum {
    new,
    employee,
    delete
}

export class Model {

    public get fullName(): string {
        return `${this.secondName} ${this.firstName} ${this.patronymic}`
    }

    public id: number;
    public firstName: string;
    public secondName: string;
    public patronymic: string;
    public status: StatusEnum;
    public dateStart: Date;
    public dateEnd: Date;
    public position: string;
    public passport: PassportModel;

    constructor(response: IResponse) {

        if ( !response ) {
            return null;
        }

        for ( let prop in response ) {
            if ( !response[prop as keyof IResponse] ) {
                return
            }

            if ( prop === 'dateStart'){
                this.dateStart = new Date(response.dateStart)
            }
            if ( prop === 'dateEnd' ) {
                this.dateEnd = new Date(response.dateEnd)
            }

            if ( prop === 'passport' ) {
                this[prop] = new PassportModel(response.passport as IPassport)
            }

            this[prop] = response[prop as keyof IResponse]
        }
    }
}

export class PassportModel {
    birthPlace: string;
    issuedBy: string;
    issuerDepartmentCode: string;
    issuingDate: Date;
    number: string;
    series: string;

    constructor(response: IPassport) {

        if ( !response ) {
            return null;
        }

        for(const prop in response){
            if ( !response[prop as keyof IPassport] ) {
                return
            }

            if ( prop === 'issuingDate') {
                this.issuingDate = new Date(response.issuingDate)
            }

            this[prop] = response[prop as keyof IPassport]
        }
    }
}


