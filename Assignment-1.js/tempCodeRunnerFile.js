a=1;
while (a<=5) {
    d=5;
    while(d>a){
        process.stdout.write(" ");
        d--;
    }
    c=a;
    b=1;
    while(b<=a){
        process.stdout.write("*");
        b++;
        c++;
    }
    f=1;
    if(a!=5){ if(a%2==0 && g==a){
        g=a;
        }
        else if(a%2==0){g=a+2;}
        else{g=a+1;}
    }
    else{g=a+3}
    while(f<a){
        process.stdout.write("*");
        f++;
        g--;
    }
    e=5;
    while(e>a){
        process.stdout.write(" ");
        e--;
    }
    console.log();
    a++;
}

x=1;
a=5;
while(a>1){
    while(x<5){
        process.stdout.write("_");
        x++;
    }
    y=5;
    while(y>1){
        process.stdout.write("*");
        y--;
    }
    z=4;
    while(z>1){
        process.stdout.write("*")
        z--;
    }
    console.log();
    a--;
}