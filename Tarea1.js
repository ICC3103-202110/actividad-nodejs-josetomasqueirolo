function fibonacci(x) {
    if(x<=1) {
        return x;
    }
    return fibonacci(x-1)+fibonacci(x-2);
}

console.log(fibonacci(5))