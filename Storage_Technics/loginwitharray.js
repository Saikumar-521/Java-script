// function RegForm() {
//     let name = document.getElementById('uname').value;
//     let age = document.getElementById('age').value;
//     let pwd = document.getElementById('pwd').value;

//     let array = [name, age, pwd];
//     // let users = {
//     //     'name': name,
//     //     'age': age,
//     //     'pwd': pwd
//     // }

//     // array.push(users);

//     let con = JSON.stringify(array)
//     localStorage.setItem("user", con)

//     alert("Succefully registered!")
// }

function loginForm() {
    let name = document.getElementById('uname').value;
    let pwd = document.getElementById('pwd').value;
    // let user = localStorage.getItem('user')
    let array_values = JSON.parse(localStorage.getItem('user'));
    console.log(array_values[0]);
    if (name == array_values[0] && pwd == array_values[2])
        alert("Login Successfully!");
    else
        alert("Login Failed");
}