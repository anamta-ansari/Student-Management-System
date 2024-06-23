#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() + 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["Javascript", "Typescript", "python", "OOP"]
    }
]);
const tutionFee = {
    "Javascript": 10000,
    "Typescript": 20000,
    "python": 5000,
    "OOP": 30000
};
console.log(`\ntutionFees : ${tutionFee[answer.courses]}`);
console.log(`Balance : ${myBalance}`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["veiw status", "Exit"]
        }
    ]);
    if (ans.select === "veiw status") {
        console.log("\nStatus\n");
        console.log(`student Name: ${answer.students} `);
        console.log(`student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExisting Student Managment System\n");
    }
}
else {
    console.log(`Invalid amount\n`);
}
;
