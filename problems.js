function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here

    let oddArray = [];

    for(i=1; i<arr.length; i+=2){
        oddArray.push(arr[i]);
    }

    return oddArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here

    let newOddArr = [];

    for(i=arr.length-1; i>0; i--){
        if(i%2 != 0){
            newOddArr.push(arr[i]);
        }

    }
    return newOddArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let x2 = [];

    for(i=1; i<arr.length; i*=2){
        x2.push(arr[i]);
    }
    return x2;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let powerOfN = [];

    for(i=1; i<arr.length; i*=n){
        powerOfN.push(arr[i]);
    }
    return powerOfN;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here

    let newArr = [];

    for(i=0; i < arr.length/2; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let newArr = [];

    for(i=arr.length/2; i<arr.length; i++){
        if(i >= 1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
