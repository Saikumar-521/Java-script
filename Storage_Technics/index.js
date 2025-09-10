function submitReg() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let password = document.getElementById('password').value;

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('password', password);
    alert('Register successfully!');
}
function showData() {
    let name = localStorage.getItem('name');
    let age = localStorage.getItem('age');
    let password = localStorage.getItem('password');
    alert("name" + name + "age" + age + "password" + password);
}

// function loginDetails() {
//     let l_name = document.getElementById("l-name").value;
//     let l_pwd = document.getElementById("l-pwd").value;

//     let name = localStorage.getItem('name');
//     let password = localStorage.getItem('password');

//     if (l_name == name && l_pwd == password)
//         alert("login successful");
//     else
//         alert("login faild")
// }
