function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) return "Cannot divide by zero";
            return num1 / num2; 
        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(10, 2, '*')); // Output: 20
console.log(calculate(9, 0, '/')); // Output: "Cannot divide by zero"

