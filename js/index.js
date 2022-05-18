// var nr;
// nr = 6;
// // console.log(nr);
// var nr2 = "31";
// console.log(nr2);
// nr = 10;
// console.log(nr);
// var result = nr + nr2;
// console.log(result);
// console.log("hamburgers" - "s");
// console.log(typeof (NaN));
// console.log("lucian" * 5);

// console.log(23 % 5)
// console.log(23 / 5)
// var x = 10;
// x++;
// console.log(x++)
// console.log(--x);

// var fname = "anca";
// var lname = "nistor";
// var fullname = fname + " " + lname;
// console.log(fullname);


// var a = 2;
// var b = 20;
// var c = "2";
// var d = 0;
// a = b;
// a = a + b;
// a += b;

// console.log(a == b);
// console.log(a == c);
// console.log(a === c);
// var res = a > 10 && b > 10;
// console.log(!res);

// curs 2 - functii

// function sum() {
//     console.log("ceva");
//  }

// sum();

// function myFunction(x, y) {
//     let z = x + y;
    // console.log(z);
    // alert(z);
// }
// console.log(z);
// let res = myFunction(3, 10);
// console.log(res);


// function myFct(x, y) {
//     let z = x + y;
//     // console.log(z);
//     return z;
// }
// let result = myFct(1, 2);
// console.log(result);

// function myName(fName, lName) {
//     let fullName = fName + " " + lName;
//     console.log(fullName);

   

// }

// myName("Anca","Nistor");

// function area(Lg, Lt) {
//     let S = Lg * Lt;
//     console.log(S);
// }
// area(7, 10);

// function perimetru(L,l) {
//     let P = 2 * L + 2 * l;
//     console.log(P);
// }
// console.log("test")
// perimetru(10, 20);

// function family(fName) {
//     let result = fName + " Nistor ";
//     return result;
// }

// let x = family("Anca")

// // console.log(x)
// let y = family("Matei")
// // console.log(y);
// let z = family("Sabina");
// // console.log(z);

// let w = x + y + z;

// console.log(w)


function age(birthYear) {
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
let mateiBth = new Date(2006, 06, 08).getFullYear()
let x=age(mateiBth);
let y = age(new Date(2003, 03, 26).getFullYear())
let z = age(new Date(1972, 03, 26).getFullYear())
console.log (x, " ",y, " ",z )