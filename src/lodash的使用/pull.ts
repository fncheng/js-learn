import { pull, remove } from 'lodash'

const arr: Array<number> = [1, 2, 3, 4, 5]
console.log(pull(arr, 3))

// console.log(remove(arr, (v) => v == 3))
console.log(arr)
