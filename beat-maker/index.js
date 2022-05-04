var cboxnum = 0
var printdiv = document.getElementById("print")
function hmok() {
    cboxnum = document.getElementById("howmuch").value
    document.getElementById("hmdiv").style.display = "none"
    main()
}
function p(t) {
    console.log(t)
}
function write(t) {
    printdiv.innerHTML += t
}
function main() {
    inhtml = ''
    cbox = "<input type=\"checkbox\" class=\"checkboxhahaha\" onclick=\"gen()\"></input>"
    for (let i = 0; i < cboxnum; i++) {
        inhtml += cbox
    }
    write(inhtml)
    write(`<br><textarea id="output" cols="30" rows="10" readonly unselectable="on"></textarea>`)
    gen()
}
function gen() {
    let output = document.getElementById("output")
    let ckb = document.getElementsByClassName("checkboxhahaha");
    out=''
    for (i = 0; i < ckb.length; i++) {
        if (ckb[i].checked){
            out+='0'
        }
        else{
            out+='-'
        }
    }
    output.value = out
}