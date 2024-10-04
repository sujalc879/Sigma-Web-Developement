let a = prompt("Enter First Number");

let b = prompt("Enter Second Number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("are bhava number tak")
}

let sum = parseFloat(a) + parseFloat(b);


function main() {
    
    try {
        
        console.log("the sum is ", sum);
        return true;
        
    } catch (error) {
        
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        return false
        
    }
    
    finally {
        console.log("The Files is Being Closed & db Connection is Off Now");
    }
    
}   

main()
 

