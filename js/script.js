const doubleLetters = (string) => {
    let arr = string.split('');
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
        arr2.push(arr[i]);
    }

    let newString = arr2.join("");


    return newString;
}