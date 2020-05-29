let start = new Date();
sum = 0;
for(let i = 0; i < 100000000; i++) {
sum++;
}
let end = new Date();
console.log("time elapsed", end - start);