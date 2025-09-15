// let uname = document.getElementById('uname');
// let sub = document.getElementById('sub');
// let marks = document.getElementById('marks');

function DetailsSubmit() {
    let uname = document.getElementById('uname').value;
    let sub = document.getElementById('sub').value;
    let marks = document.getElementById('marks').value;

    // localStorage.setItem('uname', JSON.stringify(uname));
    // localStorage.setItem('sub', JSON.stringify(sub));
    // localStorage.setItem('marks', JSON.stringify(marks));

    // let para=document.querySelectorAll('p');
    // for(let i=0;i<para.length;i++){
    //     para[i].innerText ='
    // }
    let student = JSON.parse(localStorage.getItem('StudentDetails')) || [];

    let newStudent = {
        'name': uname,
        'sub': sub,
        'marks': marks
    }

    student.push(newStudent);
    localStorage.setItem('StudentDetails', JSON.stringify(student));



    // JSON.parse(localStorage.getItem('StudentDetails'))
    //document.getElementsByTagName('ul').innerHTML = `<li>${JSON.parse(localStorage.getItem('StudentDetails'))}</li>`;
    let ul = document.querySelector('ul');
    ul.innerHTML = "";
    // Find the student with the maximum marks
    let topperStudent = student[0];
    for (let i = 0; i < student.length; i++) {
        let li = document.createElement('li');
        li.textContent = `Name:${student[i].name} Subject:${student[i].sub} marks:${student[i].marks}`;
        ul.appendChild(li);
        if (Number(student[i].marks) > Number(topperStudent.marks)) {
            topperStudent = student[i];
        }
    }
    // Display the topper's details
    let topper = document.getElementById('topper');
    topper.innerHTML = `<p>Student Name: ${topperStudent.name} </p>
        <p>Subject: ${topperStudent.sub}</p>
        <p>Top marks: ${topperStudent.marks}</p>`;
    // let topper = document.getElementById('topper');
    // topper.innerHTML = `<p>Student Name: ${max.name} </p>
    // <p>Subject:${max.sub}</p>
    // <p>top marks:${max.marks}</p>`;


    document.getElementById('uname').value = "";
    document.getElementById('sub').value = "";
    document.getElementById('marks').value = "";


}

// let arr;


// // localStorage.setItem('arr', JSON.stringify(arr))


// let data = JSON.parse(localStorage.getItem('arr'))
// console.log(data);



// if (localStorage.getItem('arr')) {

//     arr = JSON.parse(localStorage.getItem('arr'))
// } else {
//     arr = []
// }

// console.log(arr);
// arr.push()
// localStorage.setItem('arr', JSON.stringify(arr))

