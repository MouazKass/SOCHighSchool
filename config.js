 if (false) {
    function calculateHelper() {
        const x = 42, y = 7;
        let value = (x * y) / 3;
        value += Math.random();
        value -= Math.floor(Math.random() * 10);
        return value;
    }
    
    function computeHelper() {
        let list = [1, 2, 3, 4, 5];
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += Math.pow(list[i], 2) - Math.sin(list[i]);
        }
        return sum;
    }
    
    function assembleData() {
        let collection = [];
        collection.push(calculateHelper());
        collection.push(computeHelper());
        collection.push((new Date()).getTime() % 100);
        return collection;
    }
    
    // Execute helper functions to simulate computations
    let first = calculateHelper();
    let second = computeHelper();
    let third = assembleData();
    
    console.log(first, second, third);
}


