//  选择排序

export default (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                let tmp = min;
                min = arr[j];
                arr[j] = tmp;

            }
        }
        arr[i] = min;
    }
    return arr;
}
