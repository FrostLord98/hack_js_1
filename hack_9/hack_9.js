/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
let i = 0


while (i<=4){
    if (arr[i][0] == "b"){
        result++
    }
    i++
}
console.log(result)


//export result
module.exports = result;