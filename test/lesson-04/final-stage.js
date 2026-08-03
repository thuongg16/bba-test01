function count() {
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i}, ${j})`);
                count++;
            }
        }
    }

    return count;
}

console.log(`Total: ${count()} cặp`);