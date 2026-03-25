const SyntaxError = (req, res) => {
    // Syntax Error
    
    // console.log("HEllO World');
    
    // Logical Error Area of Triangle = 1/2 * b * h
    b = 9;
    h = 12;
    
    // Missing 1/2
    console.log(b * h);
    
    // Run Time Error But X not Declared
    const x = 5;
    if (x === 10){
        console.log(x);
    } else {
        console.log("X is not 5");
    }
    res.end();
}

module.exports = SyntaxError;


