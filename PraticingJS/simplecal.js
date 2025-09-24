let text = document.getElementById('text')
let btn = document.getElementsByClassName("btn")
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        let value1 = this.innerText;
        if (value1 == "C") {
            text.value = '';
        }
        else if (value1 == '=') {
            text.value = eval(text.value)
        }
        else {
            text.value += value1;
        }
    }
}