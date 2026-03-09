// // //1 lenth of string

// // let str = "Hare Krishna";

// // console.log(str.length);

// // //2. Access Characters

// // let str1 = "Javascript";
// // console.log(str1.at(0));
// // //console.log(str1.at(-1));
// // console.log(str1[str1.length-1]);

// // //3. uppercase conversion

// // let str2 = "welcome to vrindavan";
// // console.log(str2.toUpperCase());


// // //4. check substring

// // let str3 = "Hare Krishna Hare Rama";

// // console.log(str3.indexOf("Krishna"));

// // //5. Replace word

// // let str4= "This is a bad example";

// // console.log(str4.replace("bad","good"));

// //Level 2
// //6. Extracr word using "slice"
// let str = "Frontend Developer";

// let ans = str.includes("Frontend");

// if(ans){
//     let i = "Frontend".length;
//     let j = str.indexOf("Frontend");

//     console.log(str.slice(j,i));
// }


// //7. Find Position

// let str1 = "JavaScript is powerful";

// console.log(str1.indexOf("Script"));

// //8. Repeat string


// let str2 = "Hare Krishna";

// console.log(str2.repeat(5));

// //9. Trim Spaces

// let str3 = "   Krishna   ";

// console.log(str3.trim());


// level 3

//1. Reverse a string

let str = "Krishna";

let reversed = "";

for(let i =str.length-1;i>=0;i--){
    reversed +=str[i];
}

console.log(reversed);

//2. Palindrome check

let str2 = "madam";

let palin = "";

for(let i =str2.length-1;i>=0;i--){
    palin +=str2[i];
}

console.log(str2 == palin);


//3 . count vowels

let str3 = "javascript";

let count =0;

for(let i =0; i<str3.length; i++){
    if(str3.at(i).includes("a")||str3.at(i).includes("e")||str3.at(i).includes("i")||str3.at(i).includes("o")||str3.at(i).includes("u")){
        count++;
    }
}

console.log(count);

//4. count occurrence of characters

let str4 = "banana";
let occur = 0;

for(let i =0;i<str4.length;i++){
    if(str4.at(i).includes("a")){
        occur++;
    }
}

console.log(occur);

//5. Capitalize First Letter

let str5 = "krishna";
let char = str5[0].toUpperCase();
let rest = str5.slice(1);
console.log(char+rest );


//6. Remove Duplicate Characters

let str6 = "programming";
let result = "";

for(let char of str6){
    if(!result.includes(char)){
        result+=char;
    }
}
console.log(result);