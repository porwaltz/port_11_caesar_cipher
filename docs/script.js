function format(){
    const sel = document.getElementById("selector")
    if (sel.value == "caesars"){
        document.getElementById("encrypt-value").style.display = 'block'
        document.getElementById("magic-value").style.display = 'none'
    }
    else if (sel.value == "numeric"){
        document.getElementById("encrypt-value").style.display = 'none'
        document.getElementById("magic-value").style.display = 'none'
    }
    else {
        document.getElementById("encrypt-value").style.display = 'none'
        document.getElementById("magic-value").style.display = 'block'
    }
}
function encrypt(){
    const sel = document.getElementById("selector")
    const str = document.getElementById("entry-text").value.toUpperCase().split("")
    if (sel.value == "caesars"){
        const val = parseInt(document.getElementById("encrypt-value").value)
        return rot(str, val)
    }
    else if (sel.value == "numeric"){
        return num_encrypt(str)
    }
    else {
        const val = document.getElementById("magic-value").value.toUpperCase().split("")
        return magic_word(str, val)
    }
}
//====================================================================
function rot(str, val) {
    let ext = document.getElementById("exit-text")
    if(Math.abs(val)>25){
        ext.value = "choose a value between (-25,25)"
    }
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log(str)
    console.log(val)
    let current 
    let caesars = ""

    for(var i = 0; i < str.length; i++){
        if(letters.includes(str[i])){
            current = str[i].charCodeAt(0) + val
            if (current > 90){
                current -= 26
                }
            else if(current < 65){
                current +=26
                }
            caesars += String.fromCharCode(current)
            }
        else{
            caesars += str[i]
        }
    }
    console.log(caesars)
    ext.value = caesars
}
//===================================================================
function num_encrypt(str){
    let ext = document.getElementById("exit-text")
    let current = ""
    for (let i = 0; i < str.length; i++){
        switch (str[i]) {
            case "I":
                current += "1"
                break
            case "Z":
                current += "2"
            case "E":
                current += "3"
                break
            case "A":
                current += "4"
                break
            case "S":
                current += "5"
                break
            case "G":
                current += "6"
                break
            case "T":
                current += "7"
                break
            case "B":
                current += "8"
                break
            case "Q":
                current += "9"
                break
            case "O":
                current += "0"
                break
            default:
                current += str[i]
                break
          }
    }
    ext.value = current
}
//===================================================================
function magic_word(str, val){
    let ext = document.getElementById("exit-text")
    let altered_index = 0
    result = ""
    if (val.length > 36){
        ext.value = "Max word length: 36 chars"
        return
    }
    let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
    let altered_alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
    val = val.filter(l => letters.includes(l))
    for (let i = 0; i < val.length; i++){
        altered_alphabet[i] = val[i]
    }
    for (let i = 0; i < str.length; i++){
        if (letters.includes(str[i])){ 
            altered_index = letters.indexOf(str[i])
            result += altered_alphabet[altered_index]
        }
        else {
            result += str[i]
        }
    }
    ext.value = result
}