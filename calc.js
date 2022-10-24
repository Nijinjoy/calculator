function display(num){
    answer.value+=num
}
function allclear(){
    answer.value=" "
}
function evaluateexp(){
    //exp = result.value
    // res= eval(exp)
    //answer.value= res
    answer.value=eval(answer.value)
}
// function removeElement(){
//     curr_exp=res.value
//     answer.value=curr_exp.slice(0,-1)
// }
function backSpace(){
    screenView.value = screenView.value.slice(0, - 1);
}