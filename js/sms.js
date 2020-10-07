//select all elements of interest
const nameEle = document.querySelector("#name");
const emailEle = document.querySelector("#email");
const genderEle = document.querySelector("#gender");
const courseEle = document.querySelector("#course");
const addBtn = document.querySelector("#addBtn");
const StudentList = document.querySelector("#StudentList");
const counter = document.querySelector("#counter");
//add event listeners
addBtn.addEventListener('click', addStudent);
//first function to call events that happens when you click the addBook button
function addStudent(e) {
    e.preventDefault();
    let student = {
        name : nameEle.value,
        email : emailEle.value,
        gender : genderEle.value,
        course: courseEle.value
    };
    addStudentToTable(student);
    storeStudent(student);
    clearFields();
}
//2nd function to activate the table body
function addStudentToTable(student){
    let row = document.createElement("tr")
    row.innerHTML =`
         <td>${student.name}</td>
         <td>${student.email}</td>
         <td>${student.gender}</td>
         <td>${student.course}</td>
         <td><a href="#" class ="btn btn-danger btn-sm">Delete</a></td>
    `;
    StudentList.appendChild(row);
}
// 3rd function to store the books
function storeStudent(student) {
    let students;
    if (localStorage.getItem('students') ===null){
         students = [];
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));
        alert("New student added");
    }else {
        students = JSON.parse(localStorage.getItem('students'));
        students.push(student);
        location.reload();
        localStorage.setItem("students" , JSON.stringify(students));
        alert("New student added");
    }
}
// fourth function to fetch the books that have been stored
function fetchStudents() {
    let students;
    if (localStorage.getItem('students') === null) {
        students = [];
    } else {
        students = JSON.parse(localStorage.getItem('students'));
        counter.value= `${students.length} register student`;
    }
    return students;
}
//5th function to display the books that have been fetched
function displayStudents() {
    const students = fetchStudents();
     for (const student of students) {
         addStudentToTable(student);
     }
}
//6th function to clear the fields after we click thae addButton
function clearFields() {
    nameEle.value = "";
    emailEle.value = "";
    genderEle.value = "";
    courseEle.value = "";
}
