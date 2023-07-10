// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(name = "*"){
    const adj = `${name}`
    console.log(adj)
    debugger
    return function (param = "special"){
        return `You are ${adj}${param}${adj}!`
    }
    
}
