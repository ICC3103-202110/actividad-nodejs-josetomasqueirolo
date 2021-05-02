
function fibonacci(x) {
    if(x<=1) {
        return x;
    }
    return fibonacci(x-1)+fibonacci(x-2);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Ingresa un número: `, number => {
    console.log(`F(${number}) = ${fibonacci(number)}`)
    readline.close()
  })

