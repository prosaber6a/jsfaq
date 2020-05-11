// functions
nums = [12, 18, 7, 89, 56, 23];

function evenify(num){
    if (num % 2 == 0) {
        console.log(num , " : is even number");
    } else {
        console.log(num, " : is odd number");
    }
}

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num);
}



function logIn(id, password){

    function loginMessage(type){
        var message = "";
        if (type == 1) {
            message = "Field must not be empty!!!";
        } else if(type == 2) {
            message = "Login Successful";
        } else {
            message = "error";
        }
        console.log(message);
    }

    if (id == "" || password == "") {
        loginMessage(1);
    } else if (id == "admin" && password == "password") {
        
        loginMessage(2);
    } else {
        loginMessage();
    }
}

logIn("admin");



// Arguments
function addTwoNumber(num1, num2) {
    return num1+num2;
}

console.log("Sum : ", addTwoNumber(10, 20));

function summation(){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum += num;
    }
    return sum;
}

console.log("Summation : ", summation(20, 15, 58, 96, 36, 48));



// Callback function
function doWork(name, age, task){
    console.log("Hello ", name);
    console.log("You age is ", age);
    task();
}

function washHand(){
    console.log("Wash you hand..");
}

function brushTeeth(){
    console.log("Brush you teeth..");
}

doWork("A. Karim", 70, washHand);
doWork("A. Jalil", 60, brushTeeth);