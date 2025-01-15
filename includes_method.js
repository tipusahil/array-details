// ............includes() method er maddome data includes kora hoi.....

var fruits = ['lisu', 'am',   'jam',   'katal'];


console.log(fruits.includes('am'));// output: true
console.log(fruits.includes('aM'));// output: false >karon M ta boro hater ,case sensitive howai array er jei data ase kina dekte cacci  setar formatting boro hater hole hobohu boro hater ar chuto hater hole chuto hatr likte hobe.


if(fruits.includes('katal')){
    console.log('katal array er modde pawa gece')
}
else{
    console.log("array te katal pawa jaini.");
}

/* 
1.condition ta holo : jodi fruits name jei array ase setar modde katal name kuno data thake taile (katal pawa gece output dibe.) otherwise bolbe(array te katal name kuno data nei);
*/
