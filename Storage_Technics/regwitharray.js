function RegForm() {
    let name = document.getElementById('uname').value;
    let age = document.getElementById('age').value;
    let pwd = document.getElementById('pwd').value;

    let array = JSON.parse(localStorage.getItem('user')) || [];
    // let users = {
    //     'name': name,
    //     'age': age,
    //     'pwd': pwd
    // }
    // array.push(users);

    let con = JSON.stringify(array)
    localStorage.setItem("user", con)

    alert("Succefully registered!")
}