const a = process.memoryUsage()
for(let i = 0; i < 100000; i++){
    let j =+ 1
    if(j == 100){
        j = 0
    }
}
const b = process.memoryUsage()
console.log(a)
console.log(b)
