const fibonacci = (n) => {
    const arr = [0,1];
    for(let i = 2; i <= n; i++){
        const prevValue = arr[i - 1];
        const prevPrevValue = arr[i - 2];
        const nextValue = prevValue + prevPrevValue;
        arr.push(nextValue);
    }
    return arr[n];
}

module.exports = fibonacci;