let number = 10;
if(number % 5 === 0) {
    if(number % 2 === 0) {
        console.log(number + " is divisible by 5 and even");
    } else {
        console.log(number + " is divisible by 5 and odd");
    }
} else if (number % 2 === 0){
    console.log(number + "is even but not divisible by 5");
}else {
    console.log(number + "is odd and not divisible by 5");
}
