export function constantTime(arr, index) {
    return arr[index];
}

export function linearSearch(arr, needle) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === needle) {
            return true;
        }
    }

    return false;
}

export function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

export function binarySearch(arr, needle) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid];

        if (midValue === needle) {
            return mid;
        } else if (midValue < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return - 1;
}

export function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex))
                .concat(right.slice(rightIndex));
}
