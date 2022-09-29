function minMax(arr) {
    const minNumber = Math.min(...arr);
    const maxNumber = Math.max(...arr);
    const result = [minNumber, maxNumber];
    return(result);
}

minMax([1,3,5]);

function addUp(num1, num2) {
    let total = 0
    for (var i=num1; i<=num2; i++){
        total += i;
    }
    return(total)
}