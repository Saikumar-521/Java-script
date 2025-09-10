function loginDetails() {
    let l_name = document.getElementById("l-name").value;
    let l_pwd = document.getElementById("l-pwd").value;

    let name = localStorage.getItem('name');
    let password = localStorage.getItem('password');

    if (l_name == name && l_pwd == password)
        alert("login successful");
    else
        alert("login faild")
}