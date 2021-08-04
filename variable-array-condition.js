var bottleColor  = 'red';
var bottleQuantity  = 10;
var isFullWater =  false;

// array
var items = ['bottle','mobiel','paid','book'];
items.indexOf('headphone') //-1
items.push('key-ring');
items.push('pen');
items.pop();

//conditionala
if(items.length >= 4) {
    console.log("you to many stuff in this desk");
}else if(items.length == 4){
    console.log("you only have one hali items")
}
else{
    console.log("Wow!! you have a clean desk");
}
