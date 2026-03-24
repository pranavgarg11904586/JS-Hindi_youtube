//1. Basic Operations

// let arr = ["Apple","Banana"];
// arr.push("Mango");
// arr.unshift("orange");
// arr.pop();
// arr.shift();
// console.log(arr);

//2. Find Length After Refrence Copy
// let a = ["a", "b", "c"];
// let b = a;

// b.push("d");

// console.log(a.length);

//3. Middle Element Replace

// let arr = ["a", "b", "c"];

// let middle = Math.floor((arr.length)/2);
// arr[middle] = "x";

// console.log(arr);

//4. Sum Of Array
// let nums = [1, 2, 3, 4, 5];
// let calculate =0;
// for(let i =0; i<nums.length;i++){
//     calculate +=nums[i];
// }
// console.log(calculate);

//5. Find Maximum Number

// let nums = [10, 5, 25, 8];
// let max = 0;

// for(let i =0;i<nums.length;i++){
//     if(nums[i]>max){
//         max = nums[i];
//     }
// }
// console.log(max);

//6. Count Even Numbers
// let nums = [1,2,3,4,5,6];
// let even =[];
// for(let i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//         even.push(nums[i]);
//     }
// }
// console.log(even.length);

//7. Reverse Array 

let arr = [1,2,3];
let reverse =[];
for(let i =arr.length-1;i>=0;i--){
    reverse.push(arr[i]);
}

console.log(reverse);
