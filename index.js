/* Capitalize function */
const toCapital = str =>  {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + words.slice(1)).join(" ");
};

const shortStr = "Hi there";
const longStr = "the quick brown fox jumped over the lazy dog";

toCapital(longStr);//?
toCapital(shortStr);//?



/* Remove the first and last word */

let arr = ['ughhh', 'good', 'another good one', 'uugghh']

const removeFirstAndLast = arr => {
    if(arr.length >= 3) {
        return arr.slice(1, -1);
    } else {
        throw new Error("You need at least three element in the array");
    }
}

prompt removeFirstAndLast([]);

function newArr() {
    arr.shift();
    arr.pop();    
    console.log(arr);
}

newArr();