function minMax(arr) {
    const minNumber = Math.min(...arr);
    const maxNumber = Math.max(...arr);
    const result = [minNumber, maxNumber];
    return(result);
}

minMax([1,3,5]);