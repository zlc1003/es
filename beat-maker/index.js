var cboxnum = 0
var printdiv = document.getElementById("print")
var print2div = document.getElementById("print2")
function p(t) {
    console.log(t)
}
function write(t) {
    printdiv.innerHTML = t
}
function write2(t) {
    print2div.innerHTML += t
}
// window.onresize = function () {
//     kuan = document.body.clientWidth/2
//     gao = document.body.clientHeight/2.8
//     let cn=((kuan/13)*(gao/13))
//     cbox = "<input type=\"checkbox\" class=\"checkboxhahaha\" onclick=\"gen()\"></input>"
//     for (let i = 0; i < cn; i++) {
//         inhtml += cbox
//     }
//     write(inhtml)
// }
function main() {
    document.getElementById("hmdiv").style.display = "none"
    inhtml = ''
    cbox = "<input type=\"checkbox\" class=\"checkboxhahaha\" onclick=\"gen()\"></input>"
    for (let i = 0; i < cboxnum; i++) {
        inhtml += cbox
    }
    write(inhtml)
    write2(`<br><textarea id="output" cols="30" rows="10" readonly unselectable="on" style="width: 100%;height: 100%;display=none;"></textarea>`)
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
main();
(function () {
    kuan = document.body.clientWidth/2
    gao = document.body.clientHeight/2.8
    let cn=((kuan/13)*(gao/13))
    cbox = "<input type=\"checkbox\" class=\"checkboxhahaha\" onclick=\"gen()\"></input>"
    for (let i = 0; i < cn; i++) {
        inhtml += cbox
    }
    write(inhtml)
})();
gen()