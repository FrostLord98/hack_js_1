/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];

let result = arr.map((element)=>{
    return element.charAt(0).toUpperCase() + element.substring(1)
})
console.log(result)

//export result
module.exports = result;