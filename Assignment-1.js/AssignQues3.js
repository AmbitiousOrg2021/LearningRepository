// W.A.P to calculate the GCD of two numbers.

/*      >_<  Pseudocode Explanation  >_<

To calculate Greatest Common Divisor (GCD) of two numbers, we use formula:
    Euclid's formula to find GCD of two numbers-
        1 -> let 'a' and 'b' be two numbers, then
        2 -> if a>b, we will do (a-b,b)
        3 -> if b>a, we will do (a,b-a)
        4 -> repeat the steps 2 & 3 until one of the no. become 0 or both no. becomes equal.
        5 -> if a (or b) becomes zero then b (or a) is the answer.
             if a is equal to b then print anyone of them as answer.
             if a == b == 1 then either one of them or both of them are prime numbers.
    
    like for eg. let's take out GCD of 60 and 18 :
(60,18) -> (60-18,18) -> (42,18) -> (42-18,18) -> (24,18) -> (24-18,18) -> (6,18) -> (6,18-6) ->
(6,12) -> (6,12-6) -> (6,6)

since a == b, [ Answer:6 ]
*/
a = 884
b = 256 
function GCD(a,b){
    if (a==0){ return b; }
    else if (b==0){ return a;}
    else if (a==b){ return a;}
    else{
        if(a>b){ return GCD(a-b,b); }
        else{ return GCD(a,b-a); }
    }
}
console.log("GCD of two numbers "+a+" and "+b+" is "+GCD(a,b));







