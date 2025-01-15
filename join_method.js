/*......................join() method........................... */

/* join()  er kaj:array er data gulor majkane ortat koma er jaigai kuno syble boshai dewa. seta hote pare. document e hok kinba console e print korar smy hok. */

/* join()  ta kemne kaj kore:join method er bracket  er bitore sjei symble thakbe sei  symble ta array er datar er majkane koma er jaigai boshe jabe, default vabe koma  dile seta output e deka jaina, kintu join() method er maddome kuno symble join kore dile seta arrray er prottekta upodan er majkane boshe jabe.jmn:   */


/* syntex of join()  :   */
//1. document e change xyz method/function diye change korte chaile:
var fruits1 = ['angur', 'anaros',   'jambura',   'kola']; 
fruits1 = fruits1.join(" j ");
console.log(fruits1);


//2. console e print korar smy e change xyz method/function diye change korte chaile: 
var fruits = ['lisu', 'am',   'jam',   'katal']; 
console.log(fruits.join(' + '));//output: lisu + am + jam + katal
console.log(fruits.join(' | ')); // output: lisu | am | jam | katal
console.log(fruits.join(' and '));//output: lisu and am and jam and katal
console.log(fruits.join(' , '));//output: lisu , am , jam , katal

/* shorthand syntex of join() :   */
