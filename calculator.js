function isNumber(value) {
    const regex = /^[0-9]+$/;
    return regex.test(value);
}

function click1(event) {
    event.preventDefault();
    let f1 = document.getElementsByName("amounty");
    let r = document.getElementById("result");
    let s = document.getElementsByName("select1");
    if (isNumber(f1[0].value)) {
        if (s[0].value === "chocolate") {
            r.innerHTML = f1[0].value * 80;
        }
        if (s[0].value === "milk") {
            r.innerHTML = f1[0].value * 67;
        }
        if (s[0].value === "bread") {
            r.innerHTML = f1[0].value * 30;
        }
        if (s[0].value === "juice") {
            r.innerHTML = f1[0].value * 109;
        }
        if (s[0].value === "tea") {
            r.innerHTML = f1[0].value * 94;
        }
    } else {
        r.innerHTML = "Некорректный ввод данных";
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});