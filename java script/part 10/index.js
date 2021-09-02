/*for(var i=1; i<=100; i=i+1)
{
document.write("  "+i);
}*/

// 1+2+3......+10=
// 2+4+6+8......+100=
// task -6 write a program that will print sum of all the numbers that are divisible by 3 and 5 from 1-100;
var i=1;
var sum = 0;
while (i <=90 ){
  if(i % 3==0 && i% 5==0){
document.write("  " + i);
    sum= sum+ i;
  }

  i= i+1;
}
document.write("Sum =  "+ sum);
document.write("<h1>end</h1>");
