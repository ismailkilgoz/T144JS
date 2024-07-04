// Array icerisinde data barindiran bir dizidir
let meyveler=['elma','muz','kayisi','kavun']

console.log(meyveler);
console.log(meyveler[3]);

// push methodu: array sonuna yeni eleman ekliyor
meyveler.push('portakal');
console.log(meyveler);

// pop methodu: dizinin sonundaki ogeyi kaldirir. console icine yazilirsa kaldirdigi ogeyi yazdirir
// meyveler.pop();
console.log(meyveler.pop());
console.log(meyveler);  

// shift methodu: dizinin basindaki elemani kaldirir. console icine yazilirsa sildigi elemani yazdirir
console.log(meyveler.shift());
console.log(meyveler);

// unshift methodu: dizinin basina eleman ekler.
meyveler.unshift('uzum');
console.log(meyveler);

// splice methodu: 
meyveler.splice(0,1,'avokado','kiraz');
console.log(meyveler);


// concat methodu 
var arabalar=['Renault','Tofas','Opel']

console.log(meyveler.concat(arabalar));
