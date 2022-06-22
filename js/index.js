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
//     console.log(z);
//     alert(z);
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
//    let fullName = fName + " " + lName;
//   console.log(fullName);

   

//  }

// myName("Anca","Nistor");


// function MyName(fName, lName) {
//     let fullName = fName + " " + lName
//     console.log(fullName);
// }
// MyName("Anca", "Nistor");

// function sum(a, b, c) {
//     let w = a + b + c;
//     console.log(w);
//     return w;
// }

// let result = sum(1, 2, 3);
// console.log(result);


// function area(l, L) {
//     let S = l * L;
//     console.log(S);
//     return S;
// }
// let result = area(5,10);
// console.log(result);


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


//

// function catalog(fName) {
//     let w = fName + " Nistor";
//     return w;
// }

// let x = catalog("anca");
// console.log(x);
// let y = catalog("matei");
// console.log(y);
// let z = catalog("sabina");
// console.log(z);
// let w = x + y + z;
// console.log(w);

// function perimetru(a, b) {
//     let c = 2 * a + 2 * b;
//     return c;
// }

// let mm = perimetru(10, 40);

// console.log(perimetru(10, 40));

// function number () {
//     console.log("123");
// }
// number();

// function number() {
//     console.log("123");
// }
// number();

// function family(fName) {
//     let result = fName + " Nistor";
//     return result;
    
    
// }
// let x = family("Anca");
// console.log(x);
// let y = family("matei");
// console.log(y);
// let z = family("sabina");
// console.log(z);

// function number() {
//     console.log("test");
// }
// number();

// function myFct(a,b) {
//     var c = a + b
//     return c;
// }
// let c= myFct(2, 3);
// console.log(c);


// function sum(a, b) {
//     let c = a + b;
//     return c;
// }
// let c = sum(3, 5);
// console.log(c);

// function sum(a,b) {
//     var c = a + b;
//     return c;
// }
// var c = sum(5, 8);
// console.log(c);

// function test() {
//     console.log("aici");
// }
// test();

// function scris() {
//     console.log("test");
// }
// scris();

// function perimetru(L, l) {
//     let P = 2 * L + 2 * l;
//     return P;
// }
// let P = perimetru(20, 10);
// console.log(P);

// function myFct(a, b) {
//     let c = a + b;
//     console.log(c);
//     return c;
//     console.log("test");
// }
// let w=myFct(1, 2);
// console.log(w);
// myFct(2, 3);
// console.log(myFct(5, 6));

// let str = "anca e numele meu mr"
// console.log(str.length)
// console.log(str[4])

// let newStr = "we want \"to fly\" now";
// console.log(newStr)
// let position = str.indexOf("e")
// console.log(position)

// let y=str.replace("numele", "mr");
// console.log(y)



// HOMEWORK:js-STRINGS


// function is_string(name) {
//     // if (typeof name === 'string') return true;
//     // else return false;

//     return typeof name === 'string';
// }


// console.log(is_string("w3resource"));
// console.log(is_string([1, 2, 3, 4]));



// function is_Blank(str) {
//     // if (str.length === 0) return true;
//     // else return false;
//     return str.length === 0;
// }

// console.log(is_Blank(""));




// function string_to_array(input) {
//     const myArray = input.split(" ");
//     return myArray;
// }

// console.log(string_to_array("robin Singh"));



// function abb_name(input) {
//     const myArray = input.split(" ");
//     let lastName = myArray[1];
//     let firstLetter = lastName.slice(0, 1);
//     let result = myArray[0] + " " + firstLetter + ".";

//     console.log(result);
// }
// abb_name("Anca Nistor");

// function capitalize(str) {
//     const arr = str.split("");
//     arr[0]=arr[0].toUpperCase();
//     const result = arr.join("");

//     console.log(result);
   
// }
// capitalize("js string exercises");


// function truncate_string(str, nr, end) {
//     const newStr = str.slice(nr, end);
//     console.log(newStr);
// }
// truncate_string("Robin Singh", 1, 3);

// function isUpperCaseAt(str, poz) {
//     console.log(str[poz]);
//     let result = str[poz].toUpperCase();
//     console.log(result);
//     return result === str[poz];
    
// }
// // isUpperCaseAt("Js STRING EXERCISES", 1);
// console.log(isUpperCaseAt("Js STRING EXERCISES", 1));

// function insert(str1, str2, poz) {
//     // let result = str1.slice(0, poz) + str2 +" "+ str1.slice(poz);
//     return str1.slice(0, poz) + str2 +" "+ str1.slice(poz);
// }

// console.log(insert("We are doing some exercises.", "javaScript", 18));


// function remove_first_occurrence(str1, str2) {
//     let re = new RegExp(`\\b${str2}\\b`, 'gi')
//     let position = str1.search();
//     console.log(position);
// }

// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

// function compare_strings(firstString, secondString) {
//     console.log(firstString > secondString);
// }
// compare_strings('abcD','abcd');

// function gol(str) {
//     return str.lenght === 0
// }
// console.log(gol(""));


// function lung(str) {
//     let x = str.length;
//     return x;

// }

// console.log(lung("ariel"));

// function nimic(str) {

//     let x = str.length;
//     console.log(x);
//     return x;
// }


// // nimic("678");
// // console.log(nimic("678"));
// let z = nimic("678");
// console.log(z);


//ex 1


// function is_string(str) {
//          return typeof str === 'string';
// }
// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));

// ex2

// function is_Blank(str) {
//     return str.length === 0;
// }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// ex 3

// function string_to_array(str) {
//     return str.split(" ");

// }
// console.log(string_to_array("Robin Singh"));

// ex4

// function abbrev_name(str) {
//     let arr = str.split(" ");
//     arr.splice(-1, 1, arr[arr.length - 1][0] + ".");
//     return arr.join(' ');
// }
// console.log(abbrev_name("Anca Ion Viorel Robin Singh"));

// ex 5

// function capitalize(str) {
//     let arr = str.split("");
//     arr[10] = arr[10].toUpperCase();
//     console.log(arr.join(''));

// console.log(capitalize('js string exercises'));

// ex 6

// function truncate_string(str, nr) {
//     return str.slice(0, nr);
// }
// console.log(truncate_string("Robin Singh",4));

// ex 7

// function isUpperCaseAt(str, nr) {
//     let x = str[nr];
//     return x.toUpperCase() === x;
// }

// console.log(isUpperCaseAt('Js STRING EXERCISES', 7));

// function insert(str1, str2, nr) {
//     let x = str1.slice(nr);
//     console.log(x);
// }

// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

// var myArray = ["one", "two", "three"];
// var result = myArray.length;
// console.log(result);

// var myArray1 = ["one", "two", "three"];
// var myArray2 = ["for", "five", "six"];
// var result = myArray1.concat(myArray2);
// console.log(result);

// var myArray = '["one", "two", "three"]';
// var result = Array.isArray(myArray);
// console.log(result);

// var myArray = ["one", "two", "three"];
// var result = myArray.join();
// console.log(result);

// var myArray = ["one", "two", "three"];
// myArray.pop();
// console.log(myArray);

// const myArr = ["one", "two", "three", "four", "hundred"];
// console.log(myArr);

// const copy = [...myArr];
// copy.splice(2,0,"ten", "twenty");
// console.log(copy);

// const user = {
//     name: "Ovidiu",
//     age: 29,
//     saySth: function (input) {
//         console.log(input);
//         console.log(this.age);
//         return 345;
//     }
// }


// user.saySth("anca");
// console.log(user);

// console.log(user.name);
// console.log(user.saySth("vio"));

// const userKeys = Object.entries(user);
// console.log(userKeys);

// const myArray = ["one", "two", "three"];
// const copy = [...myArray];
// console.log(copy);
// console.log(myArray);

// constr user = {
//     name: "ovidiu";
//     age: 29
//     sex: m;
//     saySth: function (input) {
//         console.log(this.age);
//     }
        
// }

// var myArray = ["one", "two", "three"];
// myArray.splice(0, 2, 'four');
// console.log(myArray);


//

// function greaterNumber(a=1, b=2) {
//     if (a > b) {
//         return `Numarul mai mare dintre ${a} si ${b} este ${a}`;
//     } else {
//         return `Numarul mai mare dintre ${a} si ${b} este ${b}`;
//     }
// }
// // greaterNumber(5, 10);

// /* thtfyjh */

// const result = greaterNumber();
// console.log(result);

// console.log(greaterNumber(7,3));

// function punctaj(points) {
//     if (points >= 50 && points < 70) {
//         console.log("D")
//     } else if (points >= 70 && points < 80) {
//         console.log("C")
//     } else if (points >= 80 && points < 90) {
//         console.log("B")
//     } else if (points > 90) {
//         console.log("A");
//     } else {
//         console.log("nu exista");
//     }
// }
// punctaj(85);

// function punctaj(points) {
//     switch (123) {
//         case points >= 50 && points < 70: console.log("D"); break;
//         case points >= 70 && points < 80: console.log("C"); break;
//         case points >= 80 && points < 90: console.log("B"); break;
//         case points >= 90: console.log("A"); break;
//         case 123: console.log("number"); break;
//         case 'orange': console.log("AAA"); break;

//         default: console.log("nu exista");
//     }
// }

// // punctaj(95);
// punctaj('orange');

// for (let i = 0; i < 9; i+=2){
//     console.log(i);
// }

// const myArr = ["one", "two", "three", "four"];


// for (let i = 0; i < myArr.length; i++)
// {
//     console.log('index: ', i, ' ',myArr[i]);
// }

// const arr = [7, 14, 13, 21, 1, 25, 19, 5, 12];

//  function compare(nr) {
//     if (nr > 10) {
//         console.log(nr);
//     } else {
//         console.log("nu");
//     }
//     }
    
    
    
// function print(arr) {

//     // for (let i = 3; i < 6; i++) {
//     //     console.log( arr[i] );
//     //     compare(arr[i]);
//     //     console.log("test");
//     // }

//     let i;
//     i=7
//     while (i < 6) {
//         console.log( arr[i] );
//         // compare(arr[i]);
//         // console.log("test2");
//         i++;
//     }


//     let j = 7;
//     do {
//         console.log(arr[j]);
//         j++;
//     }
//     while (j < 6);
// }

// print(arr);


// let i = 9;

// while (true) {
    
// //  console.log(i + " oameni mai sunt in asteptare");
// //  i -=1;
//     i--;

//     if (i == -2)
//     {
//     continue;
//     }

//     console.log('here: ', i)
    
//     if (i == -5) {
//         break;
//     }
// }

// console.log('test out of loop')

// let x = 10;
// console.log(x);

// let x = 25;
// let y = 44;
// let z = x + y;
// console.log(z);

// let x = "john";
// let y = "diana";
// let z = "john" + " " + "diana";
// console.log(z);

// let x = 10;
// x++;
// let z = x;
// console.log(z);

// let string1 = "avalansa";
// let string2 = "pitulice";
// let result = string2.concat(string1);
// console.log(result);


// function is_Blank(str){
//     return str.length === 0;
// }

// console.log(is_Blank(""));
// console.log(is_Blank('abc'));

// function string_to_array(str) {
//     return str.split(" ");
// }
// console.log(string_to_array("Robin Singh"));

// function abbrev_name(str) {
//     let arr = str.split(" ");
//     console.log(arr);
    
// arr.splice(-1, 1, arr[arr.length - 1][0] + ".");
//     return arr.join(' ');
// // }
// console.log(abbrev_name("Anca Ion Viorel Robin Singh"));

// function capitalize(str) {
//     let arr = str.split("");
//     arr[0] = arr[0].toUpperCase();
//     console.log(arr.join(''));
// }

// console.log(capitalize('js string exercises'));


// function capitalize(str) {
//     let arr = str.split("");
//     console.log(arr);
//     arr[0] = arr[0].toUpperCase();
//     console.log(arr[0]);
//     console.log(arr.join(""));
// }
// console.log(capitalize('js string exercises'))



// function myFct(str) {
//     let arr = str.split("");
//     console.log(arr);
//     arr[0] = arr[0].toLowerCase();
//     arr[3] = arr[3].toUpperCase();
//     console.log(arr[0]);
//     console.log(arr[3]);
//     console.log(arr.join(""));
// }
// console.log(myFct("I am a women"));


//

// function truncate_string(str) {
//     let arr = str.split("");
//     console.log(arr);
//     arr.splice(4);
//     console.log(arr);
//     console.log(arr.join(""));
// }
// console.log(truncate_string("Robin Singh", 4));

// function truncate_string(str, nr) {
//     return str.slice(0, nr);
// }
// console.log(truncate_string("Robin Singh", 4));





// Array.isArray([1, 2, 3]);



// const myArr = ["10", "20", "30", "40"];
// console.log(myArr.shift());
// // console.log(myArr);

// const myArr = ["one", "ann", "steah"];
// console.log(myArr.sort());
// console.log(myArr);

// const nr = [1, 25, 40, 13];
// nr.sort(function (a, b) {
//     return a - b;
// });
// console.log(nr);

// const myArr = ["10", "20", "30", "40", "50", "60"];
// console.log(myArr.join(" "));
// console.log(myArr);

// const myArr = ["one", "ann", "steah"];
// myArr[0] = "four";
// myArr[2] = "fifth";
// delete myArr[1];
// console.log(myArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.slice(0,3));

// const user = {
//     name: "ovidiu",
//     age: 29,
//     saysth: function () {console.log("hello ppl") }
// };

// user.saysth();
// console.log(user.name);
// console.log(user.name);
// console.log(user.age);

// (function ()
// { var x = "hello"; })();


// function punctaj(points) {
//     if (points >= 50 && points < 70) {
//         console.log("d")
//     }else if (points >= 70 && points < 80) {
//         console.log("c")
//     }else if (points >= 80 && points < 90) {
//         console.log("b")
//     }else if (points >= 90 && points <= 100) {
//         console.log("a")
//     }else { console.log("picat")
//      };
// }
// punctaj(85);

//  function punctaj(points) {
//     switch (123) {
//         case points >= 50 && points < 70: console.log("D"); break;
//         case points >= 70 && points < 80: console.log("C"); break;
//         case points >= 80 && points < 90: console.log("B"); break;
//         case points >= 90: console.log("A"); break;
//         case 123: console.log("number"); break;
//         case 'orange': console.log("AAA"); break;

//         default: console.log("nu exista");
//     }
// }

// const irregNounSg = [ 'child', 'man', 'woman', 'person' ];
//   const irregNounPlural = [ 'children', 'men', 'women', 'people' ];

//   function plrz(count, word) {
//     // let result = ''; .. daca vrei sa salvezi rezultatul...e G sa faci o variabila locala la inceputul functiei...mai vorbim la scope and hosting

//     if (count === 1) {
//       // let result = `${count} ${word}.`;
//       // let res = count.toString() + ' ' + word;
//       return `${count} ${word}.`;;
//     } else if (count > 1) {
//       // verifc daca este neregulat sau nu
//       if (irregNounSg.includes(word)) {
//         //cazul cand este neregulat
//         let indexulCurent = irregNounSg.indexOf(word)
// ; // indexul la care se afla 'word' in 'irregNounSg'
//         return `${count} ${irregNounPlural[indexulCurent ]}.`
//       } else {
//         // subst regulat
//         return `${count} ${word}s.`
//       }
//     } else {
//       //by default - acopera toate cazurile, altele decat cele dorite: un fel de eroare de scriere, sau de conexiune la baza de date(lista cu substantive neregulate .. )....
//       return 'something went wrong'
//     }
//   }

//   const finalResult = plrz(1, 'car');
//   console.log('finalResult: ', finalResult);

// const irregNounSg = [ 'child', 'man', 'woman', 'person' ];
//   const irregNounPlural = [ 'children', 'men', 'women', 'people' ];

//   function plrz(count, word) {
//     if (count===1) {
//       return `${count} ${word}.`
//     } else if (count > 1) {
//       if (irregNounSg.includes(word)) {
//         return `${count} ${irregNounPlural[ irregNounSg.indexOf(word)
//  ]}`;
//   } else {
//        return `${count} ${word}s.`
//        }

//      } else {
//        return "nu exista";
//      }
// }
// const finalResult = plrz(0, 'child');
// console.log('finalResult: ', finalResult, 2, "dor",[ 2, 5, 7 ], {val:"unu"});
// alert("anca");

// function lang(cod) {
    
//     const languages = {
//       en: "hello word",
//       es: "holla",
//       de: "doich",
//     }
//     return languages[ cod ];
    
//     let result = "";
//     switch (cod) {
//       case "en": result = "hello world"; break;
//       case "es": result = "holla"; break;
//       case "de": result = "doich"; break;
//       default: result = "hello world";
      
//     }
//     return result;

//   }
//   let x;
//   console.log(lang(x));

//  function fct(input) {
//     if (+input[ 0 ] === 1 || +input[ 0 ] === 3 || +input[ 0 ] === 5 || +input[ 0 ] === 7) {
//     return"Persoana verificata este de sexul M";
//     } else if (+input[ 0 ] === 2 || +input[ 0 ] === 4 || +input[ 0 ] === 6 || +input[ 0 ] === 8) {
//       return  "Persoana verificata este de sexul F"
//     } else {
//       return "nu exista";
//     }
//   }
//   console.log(fct("01710902221174"))




// PROBLEMA 3-Tema JavaScript 2 - Function Types & Conditionals

// VAR 1

// const arrMark = ["Dacia", "Volvo", "Renault", "Fiat", "Toyota", "Jaguar"];
// const arrCountry = ["Romania", "Germania", "Franta", "Italia", "Japonia", "America" ];

// function car(mark) {
    
//     if (arrMark.includes(mark)) {

//         return `Marca ${mark} se produce in ${arrCountry[arrMark.indexOf(mark)]}.`;
//     } else {
//         return "Marca este necunoscuta."
//     }
// }
//     console.log(car("t"));


// VAR 2

// const arrMark = ["Dacia", "Volvo", "Renault", "Fiat", "Toyota", "Jaguar"];

// function car(mark) {
        
//         const cType = {
//         Dacia: "Romania",
//         Volvo: "Germania",
//         Renault: "Franta",
//         Fiat: "Italia" ,
//         Toyota: "Japonia" ,
//         Jaguar: "America"
//     }

//     if (arrMark.includes(mark)) {
//         return `Marca ${mark} se produce in ${cType[mark]}`;
//     } else {
//         return "alta tara";
//     }
//     }
   
// console.log(car("Fi0at"));
    
// VAR 3

// const arrMark = ["Dacia", "Volvo", "Renault", "Fiat", "Toyota", "Jaguar"];
// const arrCountry = ["Romania", "Germania", "Franta", "Italia", "Japonia", "America" ];

// function car(mark) {

//     let result = "";

//     switch (mark) {
//         case "Dacia": result = `Marca ${mark} se produce in Romania`; break;
//         case "Volvo": result = `Marca ${mark} se produce in Germania`; break;
//         case "Renault": result = `Marca ${mark} se produce in Franta`; break;
//         case "Fiat": result = `Marca ${mark} se produce in Italia`; break;
//         case "Toyota": result = `Marca ${mark} se produce in Japonia`; break;
//         case "Jaguar": result = `Marca ${mark} se produce in America`; break;

//         default: result = "nu stiu";
//     }
    
//     return result;
// }

// console.log(car("Fiat0"));


// function car(mark) {
//     let result = "";
//     switch (mark) {
//         case "Dacia": result = `Romania`; break;
//         case "Volvo": result = `Germania`; break;
//         case "Renault": result = `Franta`; break;
//         case "Fiat": result = `Italia`; break;
//         case "Toyota": result = `America`; break;
//         default: result = "nu stiu";
//     }
  
//       if (result !== 'nu stiu') {
//           return `Marce ${mark} se produce in ${result}`;
//       } else return result;
// }
  
// const arrMark = ["Dacia", "Volvo", "Renault", "Fiat", "Toyota", "Jaguar"];
  

// var imbunatatite de Boss
//


// var i = 99;
// while (true)
// {
//  console.log(i + " oameni mai sunt in asteptare");
//  i -= 1;
//  if (i == 0)
//  {
//  break;
//  }
// }


// SCOPE&HOISTING

// x = 321;
// var x = 1;
// var str = 'one';
// console.log('x', ' ', str);
// console.log(y)

// function testScope() {
//     console.log(x)
//     let y = 12;
//     console.log(y)
//     // console.log(z)
//     function second() {
//         let z = 123;
//         let y = 1234567;
//         console.log(x)
//         console.log(y)
//         console.log(z)
//         function third() {
//            const w = 555;
//            console.log(w)
//            console.log(y)
//            console.log(str)
//         }
//         third();
//     }
//     second();
// }


// function testHosting() {
//     let x = 777;
//     // let x = 888;
//     console.log(x);
// }

// let x = 123;
// if(1) {
//     let x = 777;
//     // console.log(x);
// }
// console.log(x);


// testHosting();
// console.log(x);


// {
//     const a = 1111;
//     console.log(a)
// }
// console.log(a)


// y = 1000;
// console.log(x)
// testScope();

// function foo() {
//     // var x;
//     console.log(x);
//     // let y;
//     // console.log(y);
//     var x = 1;
//     // x = 1;
//     // y = 2;
// }
// foo();

// function foo() {

    // var x = 123;
    // console.log(x)

    // function bar() {
    //     return 3;
    // }

    // return bar();

    // function bar() {
    //     return 7;
    // }

//     var x = 123;
//     function bar() {
//         console.log('one')
//         return 3;
//     }
//     function bar() {
//         console.log('two')
//         return 7;
//     }

//     console.log(x)
//     return bar();
// }
// console.log(foo())
// // foo();

// let x;
// x = 1;
// console.log(x);

// function check() {
//     var b = 2;
//     console.log(b);
//     {
//         var b = 5;
//         console.log(b);
//     }
// }
// check();


// let x = 3;
// function test() {
    
//     x = 3;
//     console.log(x);

// }

// console.log(x);
// test();

// if (true) {

//     var names = "want";
//     // console.log(names);
// }

// console.log(names);

// function test() {
//     console.log("hello");
// }

// const test = () =>  console.log("test");
// const test = () =>  123;
    
// console.log(test());
// const obj = {

//     x : 3,
//     y : function test() {
//         x=3
//         console.log(this);
//         console.log(this.x);
//     }

// }
// console.log(obj);

// obj.y();

// const car = {
//     model: 'Fiesta',
//     manufacturer: 'Ford',
//     fullName: function() {
//         return `${this.manufacturer} ${this.model}`
//     }
// }

// console.log(car.fullName());

// let greeting = "say hi";
// if (true) {
//     let greeting = "buna";
//     // let greeting = "say hi";
//     console.log(greeting);
// }

// console.log(greeting);

// ES5
// function multiply(a, b) {
//     b = (typeof b !== "undefined"), b = 1;
//     return a * b;
// };

// console.log(multiply(5,));

// ES6

// function multiply(a, b=1) {
   
//     return a * b;
// };

// console.log(multiply(5,));
 


// const x = ["anca", "vio", "sabina"];
// const y = ["iasi", "buc", "bacau"];

// console.log([...x, ...y]);




// function sum ( x, y, ...rest) {
    
//     console.log(rest);
//     console.log(x, " ", y);
//     let total = 0;
//     // for (const arg of rest) {
//     //     total += arg;
//     // }
//     // return total;
//     // return theArgs + b + c + d + e;
// }

// console.log(sum(1, 2, 3, 4, 5));


// const person = {
//     name: "iulia",
//     age: 30,
//     oras: "iasi",
//     fullname: function
// }

// function sum(...args) {
//     console.log(args);
// }
// sum([1, 2, 3, 4, 5]);

//DOM MANIPULATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const header = document.getElementById("items");
// console.log(header);
// console.log(document.getElementsByClassName('list-group-item'))
// console.log(document.getElementsByTagName('h2'));
// console.log(document.querySelectorAll('.list-group-item'));

// const byTag = document.getElementsByTagName('h2');
// console.log([...byTag][0])
// const firstTitle = document.querySelector('#firstTitle');
// console.log(firstTitle)
// firstTitle.style.color = 'red';

// const firstTitle = document.querySelector('.btn-dark');
// // console.log(firstTitle)
// firstTitle.addEventListener(
//     'click',
//     firstTitle.style.color = 'red'
// )

// function myFct() {
//     console.log('test from myFct')
// }

// const paragraph = document.createElement("p");
// paragraph.textContent = "hello";


// if (!true) {
// paragraph.style.color = "red";
// paragraph.style.fontSize = "x-large";
// } else {
//     paragraph.style.border="2px solid white"
// }


// const parentDiv = document.getElementById("header-title").parentNode;
// console.log(parentDiv);
// const childDiv = document.getElementById("header-title");
// console.log(childDiv);
// parentDiv.insertBefore(paragraph, childDiv);

