/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let i = 0
let result = []


while(i<=5){
    
    if (i == 1 ||i==2){
            
        result.push(arr[i][0]+"@"+arr[i][2]);
    } 
    else if (i === 3){
        
       result.push(arr[i].toUpperCase());
    }
    else{

    }
    i++
}

console.log(result)
//export result
module.exports = result;