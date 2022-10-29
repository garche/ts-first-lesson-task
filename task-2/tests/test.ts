import { filter, FirstType, SecondType, System, ThirdType } from '../task';

const obj1: FirstType = {
    prop1: "Привет, РТФ!",
    prop2: false,
};

const obj2: FirstType = {
    prop1: "Привет, УрФУ!",
    prop2: true,
};

const obj3: FirstType = {
    prop1: "Привет, мир!",
    prop2: true,
};

const obj4: SecondType = {
    prop1: undefined,
    prop2: () => {
        return new Date();
    }
};

const obj5: SecondType = {
    prop1: undefined,
    prop2: () => {
        return new Date(2021, 3, 1);
    }
};

const obj6: ThirdType = {
    prop1: "Cats",
    prop2: true,
    prop3: System.Linux
};

const obj7: ThirdType = {
    prop1: "Dogs",
    prop2: true,
    prop3: System.MacOS
};

const array = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];

console.log(filter(array, 'FirstType').map((elem, index) =>{
    if(index === 0){
        return elem === obj1
    }
    if(index === 1){
        return elem === obj2
    }
    if(index === 2){
        return elem === obj3
    }
}))

//________________________________________________________________________________________//

console.log(filter(array, 'SecondType').map((elem, index) =>{
    if(index === 0){
        return elem === obj4
    }
    if(index === 1){
        return elem === obj5
    }
}))

//________________________________________________________________________________________//

console.log(filter(array, 'ThirdType').map((elem, index) =>{
    if(index === 0){
        return elem === obj5
    }
    if(index === 1){
        return elem === obj7
    }
}))