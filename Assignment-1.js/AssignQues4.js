// W.A.P to print even numbers after odd times jump

/*
            >_<  Pseudocode Explanation  >_<
    we have to print even numbers (excluding 0) and there should be a gap of odd-time even numbers.
    like after printing 2 we will skip an even number ie.

        2   ->4     ->6      ->8    ->10    ->12    ->14    ->16    ...  ->24      ->26     .....
      print   skip    print    skip   skip    skip    print   skip         skip      print  .....
    |______| |____|  |_____|   |__________________|  |_____|  |________________|   |______|
      1st       1      2nd         3 odd even-no.      3rd      5 odd even-no.       4th

    -> Here, In this code I am not counting the odd times even-numbers instead
       using the even gaps of 4 to calculate the answer.
       
 */
a=1;       // we have to print 10(user input) numbers
b=2;
while(a<=10){
    console.log(b);
    b = b+(4*a);
    a++;
}