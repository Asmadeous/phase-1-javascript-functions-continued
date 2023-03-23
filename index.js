// code your solution here

function saturdayFun(act ="roller-skate"){
    console.log(`This Saturday, I want to ${act}!`);
    return `This Saturday, I want to ${act}!`;
}

function mondayWork(mAct="go to the office"){
    console.log(`This Monday, I will ${mAct}.`);
    return `This Monday, I will ${mAct}.`;
}
function wrapAdjective(sym ='*'){
    return function(adjective = "special") {
    return `You are ${sym}${adjective}${sym}!`;
    }
}