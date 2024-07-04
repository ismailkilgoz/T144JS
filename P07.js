// Kosullu ifadeler

let sayi=12;

if(sayi===0){
    console.log('Sayi sifir.')
}else if(sayi%2===0){
    console.log('sayi cifttir');
}else{
    console.log('sayi tektir.');
}

let x=12;
let y=21;
if(x%2===0 && y%2===0){
    console.log('Her iki sayi da cifttir.');
}else if(x%2===0 || y%2===0){
    console.log('sayilardan biri cifttir');
}else{
    console.log("her iki sayi da tektir");
}