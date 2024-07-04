// Java'da 3 adet degisken turu bulunur
// let  -  var  -  const  olmak uzere
// const atandiktan sonra degistirilemez. Sabiti ifade eder. org: pi sayisi

/*
Javascript'te temelde 5 adet data tipi vardir
Bu data tipleri String, Number, Boolean, Null, Undefined
Degisken olustururken data tipini belirtmeye gerek yoktur
*/

//String Data tipi
let isim='Ismail';
var soyisim='Kilgoz';
console.log(isim+' '+soyisim);

console.log(' ------------ ');

// Number Data tipi
let yas=45;
var kilo=76.2;

console.log('Yas: '+yas+'\nKilo: '+kilo);
var sayi=4.8;
console.log(sayi+kilo);

// console.log(sayi2+kilo);

const pi=3;
console.log(pi);
// pi=3.14; const olarak tanimlanan degiskene tekrar atama yapilamaz

// Boolean data tipi
const isHappy=true;
let isLearn=true;
var isLazy=false;
console.log(isHappy);
// isHappy=false;

//Null ve undefined data tipi
let firstname='Rana';
var lastname='Ulker';
var Itsalary=null;
let yearOfRetired=undefined;

console.log('Calisan Bilgileri:\n\t'+'Firstname : '+firstname+'\n\tLastname : '+lastname+'\n\tIt Salary : '+Itsalary+'\n\tYear Of Retired : '+yearOfRetired);
Itsalary=3200;
console.log('Calisan Bilgileri:\n\t'+'Firstname : '+firstname+'\n\tLastname : '+lastname+'\n\tIt Salary : '+Itsalary+'\n\tYear Of Retired : '+yearOfRetired);

console.log(typeof firstname);
console.log(typeof Itsalary);

var zam=String(100);
console.log(typeof zam);
