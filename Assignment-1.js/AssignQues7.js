// 7a.
i=0;
while(i<5){
    j=0;
    while(j<=i){
    process.stdout.write("* ");
    j++;
    }
    console.log("");
    i++;
}
console.log("----------------------------------------------------------------------");

//  7b.
let a=1;
while(a<=5){
    let b=1;
    while(b<=a){
    process.stdout.write(" "+String(b));
    b++;
    }
    console.log("");
    a++;
}
console.log("----------------------------------------------------------------------");

// 7c.
let a1=1;
while(a1<=5){
    b=5;
    while(b>a1){
        process.stdout.write(" ");
        b--;
    }
    c=1;
    while(c<=a1){
        process.stdout.write(String(c));
        c++;
    }
    d=a1-1;
    while(d>0){
        process.stdout.write(String(d));
        d--;
    }
    console.log();
    a1++;
}
console.log("----------------------------------------------------------------------");

// 7d.
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
        process.stdout.write(String(c));
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
        process.stdout.write(String(g));
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
console.log("----------------------------------------------------------------------");

// 7e.
a=0;
x = 11;
while(a<=5){
    console.log(x**a);
    a++;
}
console.log("----------------------------------------------------------------------");

// 7f.

a=5;
x=1;
count=1;
while(x<=5){
    x1=5;
    while(x1>x){
        process.stdout.write(" ");
        x1--;
    }
    x2=1;
    while(x2<=count){
        process.stdout.write("*");
        x2++;
    }
    console.log();
    x++;
    count+=2;
}
x=1;
count-=4;
while(x<=a){
    x3=1;
    while(x3<=x){
        process.stdout.write(" ");
        x3++;
    }
    x4=1;
    while(x4<=count){
        process.stdout.write("*");
        x4++;
    }
    console.log();
    x++;
    count-=2;
}
console.log("----------------------------------------------------------------------");

// 7g.

a=5;
x=0;
count=a*2-2;
while(x<5){
    y=0;
    while(y<=x){
        process.stdout.write("*");
        y++;
    }
    x1=1;
    while(x1<=count){
        process.stdout.write(" ");
        x1++;
    }
    y1=0;
    while(y1<=x){
        process.stdout.write("*");
        y1++;
    }
    console.log();
    x++;
    count-=2;
}
a=5;
x=0;
count=2;
while(x<5){
    z=a-1;
    while(z>x){
        process.stdout.write("*");
        z--;
    }
    x2=1;
    while(x2<=count){
        process.stdout.write(" ");
        x2++;
    }
    z1=a-1;
    while(z1>x){
        process.stdout.write("*");
        z1--;
    }
    console.log();
    x++;
    count+=2;
}
console.log("----------------------------------------------------------------------");

//  7h.

a=5;
x=1;
count=2;
while(x<=a){
    x1=a;
    while(x1>=x){
        process.stdout.write("*");
        x1--;
    }
    z1=1;
    while(z1<=count){
        process.stdout.write(" ");
        z1++;
    }
    x2=a;
    while(x2>=x){
        process.stdout.write("*");
        x2--;
    }
    console.log();
    x++;
    count+=2;
}
count=a*2-2;
y=2;
while(y<=a){
    y1=1;
    while(y1<=y){
        process.stdout.write("*");
        y1++;
    }
    z2=1;
    while(z2<=count){
        process.stdout.write(" ");
        z2++;
    }
    y2=1;
    while(y2<=y){
        process.stdout.write("*");
        y2++;
    }
    console.log();
    y++;
    count-=2;
}
