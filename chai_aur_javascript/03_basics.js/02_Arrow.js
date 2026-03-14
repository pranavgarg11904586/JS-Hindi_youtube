const user = {
    username:"Krishna",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome in my club`);
    }
}

user.welcomeMessage();

user.username = "Pranav";
user.welcomeMessage();

// const obj = {
//     name: "Alice",
  
//     regular() {
//       console.log(this.name); // ✅ "Alice" — this = obj
//     },
  
//     arrow: (name="guest") => {
//       console.log("pranav"); // ❌ undefined — this = outer scope
//       console.log(this.name);
//     }
//   };

//   obj.regular();
//   obj.arrow("abhishek");

var x = 1;
{
    let y = 2;
    console.log(y);
}


    console.log(x);
    // console.log(y);
let name = "pranav";
name = "akash";

console.log(name);