// problem 1

// let  num =-3;

// if(num>0){
//     console.log("positive");
// }else if(num<0){
//     console.log("negative");
// }else{
//     console.log("zero");            
// }

//problem 2

// let num =21;
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

//problem 3

// let year = 2024;

// if(year%4==0 && year%100!=0 || year %400 == 0){
//     console.log("leap year");
// }else{
//     console.log("not an leap year");
// }

//problem 4

let amount = 850;
let discount =0;
if(amount >1000){
    discount=amount*(10/100);
    amount = amount- discount;
    console.log(amount);
}else if(amount>500){
    discount=amount*(5/100);
    amount = amount- discount;
    console.log(amount);
}else{
    console.log("no discount");
}