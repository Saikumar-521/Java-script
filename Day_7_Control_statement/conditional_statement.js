/*
control statement:
control the flow of excution
 1.conditional Statement
  based on the condition block will be excuted
  if,if else, else if ladder
  1.if:
    if and only if the condition is true then excutes the if block
  2.if else
    if the conditon is true,the if block excute,else the condition is false the else block will be excute
    syntax:
    if(Condition){
    //if condition is true, this block excutes
    }
    else
    {
    //if condition is false,this block is excutes 
    }
  3.else if
  it checks the multiple conditions,condition one after another condition gets true excutes the elif block otherwise excutes the else block
  syntax:
  if(condition1){
  //if con1 is true excutes this block
  }
  else if(condition2){
  //if con2 is true excutes this block
  }
  else
  {
    if any condition is not true excutes the else block
  }

*/


let cartValue=100;
if(cartValue>=100)
{
  console.log("The deliver charges will not applied");
}
else{
  console.log("The deliver charges will applied");
}

//show products

let products=0//prompt("enter the number of products:");

if(products>0){
  console.log("the number of products are"+products)
}
else
{
  console.log("products are out of stock")
}

let number=0;

if(number>=0){
  if(number%2===0)
  {
    // 
    if(number==0){
      console.log("Netural number "+number);
    }
    else{
      console.log("Postive Even number"+number);
    }
  }
  else{
    console.log("Postive Odd number "+number)
  }
}
else{
    if(number%2===0)
  {
    console.log("Negative even number "+number);
  }
  else{
    console.log("Negative Odd number "+number)
  }
}

let marks=80;

if(marks>=90){
  console.log("Grade: A"+marks);
}
else if(marks>=80){
  console.log("Grade: B"+marks);
}
else if(marks>=70){
  console.log("Grade: C"+marks);
}
else if(marks>=60){
  console.log("Grade: D"+marks);
}
else{
  console.log("Sorry Your Poor in Grade:E"+marks);
}