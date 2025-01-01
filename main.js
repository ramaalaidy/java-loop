/*task1*/
for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
}
/*task2*/
let i = 1;
while (i <= 10) {
    document.write(i + " ");
    i++;
}
/*task3*/
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + " "); 
}
/*task4*/
for (let i = 0; i <= 10; i += 2) {
    document.write(i + " "); 
}
/*task5*/
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; 
}
document.write("Sum: " + sum); 
/*task6*/
let arrs = [1, 2, 3, 4, 5];

let largest = arrs[0];

for (let i = 1; i < arrs.length; i++) {
    if (arrs[i] > largest) {
        largest = arrs[i];  
    }
}
console.log(largest);  

/*task7*/
let tas = [5, 4, 3, 2, 1];

let smallest = tas[0];

for (let i = 1; i < tas.length; i++) {
    if (tas[i] < smallest) {
        smallest = tas[i];  
    }
}

console.log(smallest);  

/*task8*/
let at = [1, 2, 3, 4, 5];

let st = 0;

for (let i = 0; i < at.length; i++) {
    st += at[i]; 
}
let average = st / at.length;
console.log(average);  

/*task9*/
let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;  
}

console.log("Factorial: " + factorial); 
/*task10*/
let ra = 20;

function isPrime(n) {
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

for (let i = 2; i <= ra; i++) {
    if (isPrime(i)) {
        document.write(i + " ");
    }
}
/*task11*/
let main = 5;

for (let i = 1; i <= 10; i++) {
    console.log(main + " x " + i + " = " + (main* i)); 
}
/*task12*/
let array = [1, 2, 3, 4, 5];
let step = 2;  
for (let i = 0; i < array.length; i += step) {
    console.log(array[i]);  
}
/*task13*/
let task = [1, 2, 3, 4, 5];

for (let i = task.length - 1; i >= 0; i--) {
    console.log(task[i]);  
}
/*task14*/
let sta = [1, 2, 3, 4, 5];
let start = 2;  
let end = 4;    

for (let i = start - 1; i < end; i++) {
    console.log(sta[i]);  
}
/*task15*/
let arry = [1, 2, 3, 4, 5];
let numm = 4;

let found = false;

for (let i = 0; i < arry.length; i++) {
    if (arr[i] === numm) {
        found = true;  
        break;  
    }
}
console.log(found);
/*task16*/
let ar = [1, 2, 1, 3, 2, 1];
let nu = 1;

let frequency = 0;

for (let i = 0; i < ar.length; i++) {
    if (ar[i] === nu) {
        frequency++;  
    }
}
console.log(frequency); 
/*task17*/
let n = 10;

let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let next = a + b; 
    console.log(next); 
    a = b;  
    b = next; 
}

