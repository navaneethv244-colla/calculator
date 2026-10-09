function displaynumber(num){
    result.value += num
}
function backbutton(){
    result.value = (result.value).slice(0,-1)
}
function cleared(){
    result.value = " "
}
function operator(){
    result.value = eval(result.value)
}