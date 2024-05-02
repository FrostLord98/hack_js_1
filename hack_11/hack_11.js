/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let lista1 = [];
let ls = []
let result = []
let i = 1;


lista1.push("h@ck")
while(i<=numberArray.length){
    if (i==1){
        lista1.push("one")
        ls.push("f00")
    }
    else if (i==2){
        ls.push("Bar")
        lista1.push(i)
    }
    else if(i==3){
        lista1.push("three")
        ls.push("b@z")

    }
    else if(i==4){
        ls.push("quX")
        lista1.push(i)

    }
    else {
        lista1.push("five")
        lista1.push("h@ck")
        ls.push("3ch0")
    }

    i++
}
result = lista1.concat(ls)
result.push("h@ck")



console.log(result)

//export result
module.exports = result;