function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}  

const promises = [
    delayedPromise("1", 1000),
    delayedPromise("2", 500),
    delayedPromise("3", 2000),
    delayedPromise("4", 1500),
    delayedPromise("5", 800)
];

Promise.all(promises)
    .then(results => {
        console.log("Vse okey:");
        console.log(results);
    })
    .catch(error => {
        console.error("error:", error);
    });


function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}


const promises2 = [
    randomDelay("1"),
    randomDelay("2"),
    randomDelay("3"),
    randomDelay("4"),
    randomDelay("5"),
];

Promise.race(promises2)
    .then((result) => {
        console.log("first:", result);
    })
    .catch((error) => {
        console.error("error:", error);
    });
