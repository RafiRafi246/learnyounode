console.log(
    process.argv
    .slice(2)
    .map((x) => +x)
    .reduce((a, b) => a + b, 0),

);