function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// // The module object in Node.js represents the current module's information and is used for handling module exports, not for containing all built-in modules.
// console.log(module);

// for exporting a single function
// module.exports = linearSearch;

// for exporting multiple functions
module.exports = {
    linearSearch,
    binarySearch
};