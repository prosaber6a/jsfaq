// global scope
var name = "Abdul";
function add(num1, num2) {
    // local scope
    var result = num1 + num2;

    // window scope
    result2 = num1 + num2;
    window.result3 = num1 + num2;
    
    
    console.log("name inside", name);

    // local scope
    function double(num) {
        return num * 2;
    }
    // local scope
    var total = double(result);
    return total;
}

console.log("name outside", name);


const total = add(13, 21);
console.log(total);
console.log("outside result", result3);
