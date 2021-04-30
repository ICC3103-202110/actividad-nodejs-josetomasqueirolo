
function fibonacci(x) {
    if(x<=1) {
        return x;
    }
    return fibonacci(x-1)+fibonacci(x-2);
}

console.log("Escriba el número para la suceción:");
var stdin = process.openStdin();


stdin.addListener("data", function(d) {
    console.log("F(" + d.toString().trim() +")");
});



console.log(fibonacci(8))