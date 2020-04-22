const prettyPrice = (initial, extra) => {
    if (Number.isInteger(extra)) {
        extra = extra * 0.01;
    }
    
    return (parseInt(initial) + parseFloat(extra));
}

// const prettyPrice = (grossPrice, extension) => {
//     if (Number.isInteger(extension)) {
//         extension = extension * 0.01;
//     }
//     return Math.floor(grossPrice) + extension;
// }


prettyPrice(3.50, 0.95)//?
prettyPrice(66.50, 0.95)//?