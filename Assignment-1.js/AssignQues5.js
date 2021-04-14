// W.A.P to count the number of digits in a number.
/*
        >_<  Pseudocode Explanation  >_<
    
    we can count the number of digits in a number by taking out single digits
    out of it from the last and counting them one by one.
    let a = 12345 then,
    -> we will take out the last digit of the number by dividing a by 10.
    -> repeat the process until the number becomes less than 0.
    
for eg:- 
-> performing 12345 / 10 to exclude the last digit and count becomes 1.
-> performing 1234 / 10 to exclude the last digit and count becomes 2.
-> performing 123 / 10 to exclude the last digit and count becomes 3.
-> performing 12 / 10 to exclude the last digit and count becomes 4.
-> performing 1 / 10 to exclude the last digit and count becomes 5.
-> now when we will perform 0/10 will give us 0 and we will stop here.

*/

a = 1131342;
count = 0;
while(a != 0){
    a = a/10;
    count+=1;
}
console.log("The number of digits in a given number is "+(count));