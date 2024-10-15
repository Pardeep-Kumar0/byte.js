const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = 0, num2 = 0, num3 = 0;
let sum = 0;

rl.question("Enter the 1st number: ", (answer1) => {
    num1 = parseInt(answer1);
    console.log(" " + num1);

    rl.question("Enter the 2nd number: ", (answer2) => {
        num2 = parseInt(answer2);
        console.log(" " + num2);

        rl.question("Enter the 3rd number: ", (answer3) => {
            num3 = parseInt(answer3);
            console.log(" " + num3);

            sum = num1 + num2 + num3;
            console.log("Sum of the 3 numbers is: " + sum);

            rl.close();
        });
    });
});

