function calculateArea(height, width){
    return height * width;
}

let height = 100, width = 16;

let area = calculateArea(height, width);


if (area > 100){
    console.log("The Area is Larger", area);
} else {
    console.log("The Area is Small", area);
}


if (height * width > 100) {
    console.log("The Area is Greater than or equal to 100");
}





