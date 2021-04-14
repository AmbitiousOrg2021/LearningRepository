/*
W.A.P to input credits of a code for cause campus leader and then output the badge
of the lead on the basis of the following criteria:
    a. 7500 <= credits   -> Tera Leader
    b. 6000 <= credits < 7500   -> Gega Leader
    c. 4500 <= credits < 6000   -> Mega Leader
    d. credits < 4500    -> Rising Star

*/
let n = 5000;

if (n>=7500){
    console.log("Tera Leader");
}
else if(6000<=n<7500){
    console.log("Gega Leader");
}
else if(4500<=n<6000){
    console.log("Mega Leader");
}
else{
    console.log("Rising Star")
}