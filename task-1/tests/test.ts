import { normalize } from '../task';

console.log(normalize(20, 'количество боллов') === 'количество боллов 20')
console.log(normalize('количество боллов', 20) === 'количество боллов 20')
