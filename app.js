import {
    constantTime,
    linearSearch,
    bubbleSort,
    binarySearch,
    mergeSort
} from "./algorithms/timeComplexity.js";

function appendResult(result) {
    const p = document.createElement('p');
    p.textContent = result;
    document.body.appendChild(p);
}

const sortedArray = [1, 2, 3, 4, 5];

console.log(constantTime(sortedArray, 3));
appendResult(constantTime(sortedArray, 3));

console.log(linearSearch(sortedArray, 3));
appendResult(linearSearch(sortedArray, 3));

const unsortedArray = [4, 2, 5, 1, 3];

console.log(bubbleSort(unsortedArray));
appendResult(bubbleSort(unsortedArray));

console.log(binarySearch(unsortedArray, 3));
appendResult(binarySearch(unsortedArray, 3));

console.log(mergeSort(unsortedArray));
appendResult(mergeSort(unsortedArray));

