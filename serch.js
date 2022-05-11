function myFunctionhahaha() {
    let input, filter, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    // chenge spcse in the varble filter to unicode
    while (filter.includes(" ")) {
        filter = filter.replace(" ", '_');
    }
    gjc = filter.split("_")
    li = document.getElementsByClassName("hahahajoejoebtnbtn")
    for (i = 0; i < li.length; i++) {
        is_in = true
        a = li[i];
        txtValue = a.innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            continue
        }
        for (let j = 0; j < gjc.length; j++) {
            if (txtValue.includes(gjc[j])) {
                a.style.display = "";
                continue;
            } else {
                is_in = false
            }
        }
        if (is_in) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
    let allf = true
    for (let i = 0; i < li.length; i++) {
        if (li[i].style.display == "none") { }
        else { allf = false }
    }
    if (allf) {
        document.getElementById("lrs").style.display = ""
    } else {
        document.getElementById("lrs").style.display = "none"
    }
}
function lessupdate() {
    document.getElementById("lrs").style.display = "none"
    let input, filter, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    while (filter.includes(" ")) {
        filter = filter.replace(" ", '_');
    }
    gjc = filter.split("_")
    li = document.getElementsByClassName("hahahajoejoebtnbtn")
    for (let i = 0; i < li.length; i++) {
        is_in = false
        a = li[i];
        txtValue = a.innerHTML;
        for (let j = 0; j < gjc.length; j++) {
            if (txtValue.includes(gjc[j])) {
                is_in = true
                break
            }
        }
        if (is_in) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}