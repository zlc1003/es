function myFunctionhahaha() {
    var input, filter, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    // chenge spcse in the varble filter to unicode
    while (filter.includes(" ")) {
        filter = filter.replace(" ", '_');
    }
    gjc = filter.split("_")
    li = document.getElementsByClassName("hahahajoejoebtnbtn")
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        for (var j = 0; j < gjc.length; j++) {
            if (txtValue.includes(gjc[j])) {
                a.style.display = "";
                continue;
            }
        }
    }
}