// W.A.P to calculate simple interest

/*         >_<  Pseudocode explanation  >_<
according to the formula of simple interest:
        P x R x T
S.I. = -----------
           100

and amount:

Amount = S.I. + Principal 

But in this question we do not have principal, instead we have amount, so we can use formula:
      ___________________________________
     |          Amount x Rate x Time     |
     |  S.I. = -----------------------   |
     |          100 + ( Rate x Time )    |
     |___________________________________|

*/

amount = 1040;      //  Rs.
rate = 2;           //  %
time = 2;           //  years

SimpleInterest = (amount*rate*time)/(100+rate*time);
console.log("Interest for t years with r rate is",SimpleInterest)