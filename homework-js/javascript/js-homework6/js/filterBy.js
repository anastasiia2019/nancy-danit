'use strict';
let arr = [48,25, 'str1','str2',true,false,null, undefined,[2,3,4], {key1:5,key2:6}];

function filterBy(array, type) {
    let newArr = [];
    
    arr.forEach(function(item) {
            if (typeof (item) !== type) {
                newArr.push(item);
            }
    });
    return newArr;
}

// console.log( filterBy(arr, 'boolean'));
// console.log( filterBy(arr, 'number'));
// console.log( filterBy(arr, 'string'));
// console.log( filterBy(arr, 'undefined'));
// console.log(filterBy(arr, "null"));
console.log( filterBy(arr, 'object'));


// function filterBy (array, type) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++ )  {
//         if (typeof array[i] !== type ) {
//             newArr.push(array[i])
//         }
//     }
//     return newArr;
// }