import { IResponse, Model } from "../task";

const firstTest: any = null;
//Чисто посмотреть не будет ли ошибки
new Model(firstTest)

const thirdTask: IResponse = {
    id: 1,
    firstName: 'Сергей',
    secondName: 'Воробьев',
    patronymic: 'Евгеньевич',
    status: 1,
    dateStart: '2022-10-29T12:41:21.858Z',
    dateEnd: '2022-10-29T12:41:21.858Z',
    position: 'Талисман',
    passport: null
}

const thirdTest: Model = new Model(thirdTask)

console.log(thirdTest.status === 2)