// let a = 86;

// if (a==86) {
//     console.log("You Can Drive...");
// }

// else {
//     console.log("You Cannot Drive...");
// }






// Write a program that determines whether a given number is positive or negative.

// let a = 954;

// if(a>0) {
// console.log(a  + " is Positive");
// }

// else {
//     console.log(a  + " is Negative");
// }





// Write a program that checks if a number is even or odd.

// let a = 50;

// if(a%2==1) {
//     console.log("Odd");
// }
// else {
//     console.log("Even");
// }




//  Write a program that assigns a letter grade based on a numerical grade.

// let a = 955;
// let marks;

// if(a>=90 && a<=100) {
//     console.log("Marks = "+ a + " and Grade: A");
// }

// else if(a>=70 && a<90) {
//     console.log("Marks = "+ a + " and Grade: B");
// }

// else if(a>=50 && a<70) {
//     console.log("Marks = "+ a + " and Grade: C");
// }

// else if(a<50 && a>=0) {
//     console.log("Marks = "+ a + " and Grade: D");
// }

// else {
//     console.log("Enter Valid Marks");
// }







// Write a program that determines if a year is a leap year.

// let a = 1224;

// if(a%4==0) {
//     console.log(a + " is Leap Year");
// }

// else {
//     console.log(a + " is Not Leap Year");
// }




// Write a program that calculates a discount based on the purchase amount.

// let purchase = 5006;

// if(purchase>=200 && purchase<=500) {
//     console.log("The Discount is 20%");
// }

// else if(purchase>=500 && purchase<=1000) {
//     console.log("The Discount is 50%");
// }

// else if(purchase>1000) {
//     console.log("The Discount is 70%");
// }

// Write a program that calculates the ticket price based on age.


// let age = 23;

// if(age>=0 && age<12) {
//     console.log("Your Ticket Price is 5$");
// }
// else if(age>=12 && age<18) {
//     console.log("Your Ticket Price is 10$");
// }
// else if(age>=18 && age<60) {
//     console.log("Your Ticket Price is 20$");
// }
// else if(age>=60 && age<=110) {
//     console.log("Your Ticket Price is 15$");
// }
// else {
//     console.log("Plese Enter a Valid Age of a Person");
// }



// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// let purchase = 124;

// if(purchase >= 100) {
//     discount = 20;
// }

// else if(purchase >= 50) {
//     discount = 10;
// }

// else {
//     discount = 0;
// }

// console.log("discount: " + discount + "%");








// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.



// let date = new Date();

// let hour = date.getHours();

// if(hour<12) {
//     grettings = "Good Morning";
// }

// else if(hour<17) {
//     grettings = "Good Afternoon";
// }

// else {
//     grettings = "Good Evening";
// }

// console.log(grettings);







// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).



// let weight = 33;
// let height = 1.23;
// let BMI = weight / (height*height);

// if(BMI < 18.5) {
//     console.log("Underweight");
// }

// else if(BMI>=18.5 && BMI<=24.9) {
//     console.log("Normal");
// }
// else if(BMI>=25 && BMI<=29.9) {
//     console.log("Overweight");
// }
// else if(BMI>=30 && BMI<=34.9) {
//     console.log("OBESE");
// }
// else if(BMI>=35 && BMI<=110) {
//     console.log("Extremely OBESE");
// }

// else {
//     console.log("Plese Enter a valid Details...")
// }



let marks = 95;

let result = (marks > 35)? "you are pass":"Fail";

console.log(result);



