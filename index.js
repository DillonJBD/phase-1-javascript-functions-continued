function saturdayFun(sumValue = "roller-skate"){
    return `This Saturday, I want to ${sumValue}!`
}

const mondayWork = function(sumValue = "go to the office"){
    return `This Monday, I will ${sumValue}.`

}

function wrapAdjective(flair = "*"){
    const innerFunction = function(sumValue = "special"){
        return `You are ${flair}${sumValue}${flair}!`;
    };
    return innerFunction;

}