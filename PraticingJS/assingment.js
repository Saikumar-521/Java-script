// //Student grade and scholarship eligibility
// let marks=prompt("Enter your marks:");
// let age=prompt("Enter your age:");

// if(marks>=90){
//     console.log("Grade: A");
//     if(age<=18){
//         console.log("Eligible for scholarship");
//     }
//     else{
//         console.log("According to your age you not eligible for scholarship");
//     }
// }
// else if(marks>70){
//     console.log("Grade: B");
//     if(age>18){
//         console.log("Try again next year");
//     }
//     else{
//         console.log("According to your marks not eligible for scholarship");
//     }
// }
// else{
//     console.log("Fail");
// }

// /*
// output:
// marks=97
// age=17
// Grade: A
// */
//  /*   
// //Login system with device check
// let user_login="yes";
// let device="desktop";

// if(user_login=="yes"){
//     if(device=="mobile"){
//         console.log("Mobile Dashboard");
//     }
//     else{
//         console.log("Desktop Dashboard");
//     }

// }
// else{
//    console.log("Please login");
// }
   

// //Nested Discount Offer

// let cart_value=700;
// let prime=true;
// let coupon=false;
// if(cart_value>500){
//     if(prime){
//         console.log("20 percent discount");
//     }
//     else{
//         if(coupon)
//             console.log("10 percent discount");
//         else
//             console.log("5 percent discount");
//     }

// }
// else{
//     console.log("No discount");
// }
    

// //temperature Analyzer

// let temp=36;
// let time="afternoon";

// if(temp>35){
//     if(time=="afternoon")
//         console.log("Exterme Heat warning");
//     else
//         console.log("hot weather");
// }
// else if(temp>25)
//     console.log("normal");
// else
//     console.log("cold");



// //train ticket fare calculator
// let destination="metro city";
// let passenger="student";

// if(destination=="metro city")
// {
//     if(passenger=="senior")
//         console.log("40 percent off");
//     else if(passenger=="student")
//         console.log("50 percent off");
//     else
//         console.log("Full fare");
// }
// else{
//     if(passenger=="student")
//         console.log("50 percent off");
//     else
//         console.log("Full fare");
// }



// let language=prompt("select one language en,hi,fr:");
// let timeOfDay=prompt("select Day time morning or evening:");
// switch(language){
//     case "en":
//         if(timeOfDay=="morning")
//             console.log("Good Morning! in en");
//         else
//             console.log("Good Evening! in en");
//     break;
//     case "hi":
//         if(timeOfDay=="morning")
//             console.log("Good Morning! in hi");
//         else
//             console.log("Good Evening! in hi");
//     break;
//     case "fr":
//         if(timeOfDay=="morning")
//             console.log("Good Morning! in fr");
//         else
//             console.log("Good Evening! in fr");
//     break;
//     default:
//         console.log("please select one langauage");
// }
        
// //currency converter app
// let currency=prompt("select currency type USD,EUR,INR");
// let amount=prompt("Enter your amount:")
// switch(currency){
//     case "USD":
//         if(amount>1000)
//             console.log("Add bonus amount in USD currency ");
//         else
//             console.log("use standard conversion");
//     break;
//     case "EUR":
//         if(amount>1000)
//             console.log("Add bonus amount in EUR currency");
//         else
//             console.log("use standard conversion");
//     break;
//     case "INR":
//         if(amount>1000)
//             console.log("Add bonus amount in INR currency");
//         else
//             console.log("use standard conversion");
//     break;
//    default:
//     console.log("select currency type");
// }


// //Role and department Acess control

// let role=prompt("select your role admin,manager,employee");
// let department=prompt("select your department:");
// switch(role){
//     case "admin":
//         if(department=="HR")
//             console.log("Edit Access Granted");
//         else
//             console.log("View Only Access");
//     break;
//     case "manager":
//         if(department=="HR")
//             console.log("Edit Access Granted");
//         else
//             console.log("View Only Access");
//     break;
//     case "employee":
//         if(department=="HR")
//             console.log("Edit Access Granted");
//         else
//             console.log("View Only Access");
//     break;
//     default:
//         console.log("select your role");
// }
     

// let weather="sunny";
// let temperature_threshold=true;

// switch(weather){
//     case "rainy":
//         if(temperature_threshold)
//             console.log("Stay inside,out side heavy rainy");
//         else
//             console.log("Wear protection");
//     break;
//     case "sunny":
//         if(temperature_threshold)
//             console.log("Stay inside,out side hot sunny weather");
//         else
//             console.log("Wear protection");
//     break;
//     case "snow":
//         if(temperature_threshold)
//             console.log("Stay inside,out side heavy snow");
//         else
//             console.log("Wear protection");
//     break;
//     default:
//         console.log("select weather");
// }
    
// //Mobile plan chooser
// let mobilePlan=prompt("Enter mobile plan basic,standard,premium");
// let user=prompt("users type:");

// switch(mobilePlan){
//     case "basic":
//         if(user=="student")
//             console.log("Extra student pricing applied");
//         else
//             console.log("Standard pricing applied");
//     break;
//     case "standard":
//         if(user=="student")
//             console.log("Extra student pricing applied");
//         else
//             console.log("Standard pricing applied");
//     break;
//     case "premium":
//         if(user=="student")
//             console.log("Extra student pricing applied");
//         else
//             console.log("Standard pricing applied");
//     break;
//     default:
//         console.log("Choose the mobile plan");
// }

// //Dynamic Offer Display
// let cartValue=2000;
// let primeStaus=true;

// if(cartValue>=1000){
//     if(primeStaus)
//         console.log("Free Delivery and 20 percfent discount");
//     else
//         console.log("Free Delivery and percent Discount");
// }
// else if(cartValue>=500){
//     if(primeStaus)
//         console.log("10 percent discount");
//     else
//         console.log("Delivery charges is 50 rupees");
// }
// else
//     console.log("No Offers Available");


// //Login system with 2-step verification
// let userName="saikumar";
// let password="sai143";
// let OTP=1234;

// if(userName==="saikumar" && password==="sai143"){
//     if(OTP==1234)
//     {
//         console.log("Login Successful");
//     }
//     else
//     {
//         console.log("Invalid OTP");
//     }
// }
// else{
//     console.log("Invalid Credentials");
// }


// //theme chager with auto detection
// let theme=prompt("select theme light,dark,auto");
// let time=true;//true means before 6pm
// switch(theme){
//     case "light":
//         console.log("Light theme Applied");
//     break;
//     case "dark":
//         console.log("Dark theme Applied");
//     break;
//     case "auto":
//         if(time)
//             console.log("Apply Light theme");
//         else
//             console.log("Apply Dark theme");
//     break;
//     default:
//         console.log("select theme");
// }

// //Course recommendation system

// let age=20;
// let interest=prompt("Select your area of interest coding,design,marketing");
// if(age<18)
//     console.log("Try Beginner Bootcamp");
// else{
//     switch(interest){
//         case "coding":
//             console.log("Full Stack Development Course");
//         break;
//         case "design":
//             console.log("UI UX Design Course"); break;
//         case "marketing":
//             console.log("Digital Marketing"); break;
        
//     }
// }

// //Language and Region selector

// let langauage=prompt("Enter language en,hi,fr,es:");
// let region=prompt("Enter your region:");

// switch(langauage){
//     case "en":
//         if(region=="india")
//             console.log("Hello NAmaste");
//         else
//             console.log("others");
//     break;
//     case "hi":
//         if(region=="india")
//             console.log("Namaste");
//         else
//             console.log("others");
//     break;
//     case "fr":
//         if(region=="india")
//             console.log("Bonjour");
//         else
//             console.log("others");
//     break;
//     case "es":
//         if(region=="india")
//             console.log("Hola");
//         else
//             console.log("other");
//     break;
//     default:
//         console.log("select any language");
// }

// //Delivery time Estimator

// let product_type=prompt("select product Fragile,Express,Standard");
// let city=prompt("select city metro,non-metro");

// switch(product_type){
//     case "Fragile":
//         if(city=="metro")
//             console.log("2 days");
//         else
//             console.log("4 days");
//     break;
//     case "Express":
//         if(city=="metro")
//             console.log("1 days");
//         else
//             console.log("2 days");
//     break;
//     case "Standard":
//         if(city=="metro")
//             console.log("3 days");
//         else
//             console.log("5 days");
//     break;
//     default:
//         console.log("select product type");
// }

// //Bill splitter with promo logic
// let totalBill=100;
// let numberOfpeople=6;
// let promoCode=prompt("enter promo code: FLAT50 or PERCENT10");
 
// switch(promoCode){
//     case "FLAT50":
//         totalBill-=50;
//     break;
//     case "PERCENT10":
//         totalBill *=0.90;
//     break;
//     default:
//         console.log("No discount");
// }
// console.log(totalBill);
// console.log(totalBill/numberOfpeople)


// //Multi-currency checkout with promo
// let amount=100;
// let currency=prompt("select currenecy INR,USD,EUR");
// let promoCode=prompt("Enter Promo code FLAT100 OR PERCENT10");

// switch(currency){
//     case "INR":
//         if(promoCode=="FLAT100")
//             amount=amount-100;
//         else
//             amount=amount*0.90;
//     console.log(amount+"INR");
//     break;
//     case "USD":
//         if(promoCode=="FLAT100")
//             amount=amount-100;
//         else
//             amount=amount*0.90;
//     console.log(amount+"USD");
//     break;
//     case "EUR":
//         if(promoCode=="FLAT100")
//             amount=amount-100;
//         else
//             amount=amount*0.90;
//     console.log(amount+"EUR");
//     break;
//     default:
//         console.log("select currency");
// }

// //student result and feedback
// let marks=97;
// let section="A";
// if(marks>=90)
// {
//     if(section=="A")
//         console.log("Outstanding in section A");
//     else
//         console.log("Excellent in section B");
// }
// else if(marks>=70){
//     console.log("good performance");
// }
// else
//     console.log("Needs Improvement");


// //age group greeting
// let age=17;
// let gender="male";
// if(age<13)
// {
//     if(gender=="male")
//         console.log("hey young boy");
//     else
//         console.log("hey little girl");
// }
// else if(age<19)
//     console.log("Hello Teen");
// else
//     console.log("Welcome Adult");*/


/*LOOPS assignment */

