import { IResponse, Model } from '../task';

const example: IResponse = {
    id: 1,
    firstName: 'Сергей',
    secondName: 'Воробьев',
    patronymic: 'Евгеньевич',
    status: 1,
    dateStart: '2022-10-29T12:41:21.858Z',
    dateEnd: '2022-11-29T12:41:21.858Z',
    position: 'Талисман',
    passport: {
        series: '6514',
        number: '912310',
        issuedBy: 'ГУМВД РФ',
        issuingDate: '2014-10-29T12:41:21.858Z',
        issuerDepartmentCode: '614-15',
        birthPlace: 'Планета Железяка'
    }
}

const secondTest: Model = new Model(example)

console.log(secondTest.getFullName() === 'Воробьев Сергей Евгеньевич')

console.log(secondTest.dateStart.getDate() === 29)


