var add = document.getElementById("button");
var myname = document.getElementById("name");
var prof = document.getElementById("prof");
var age = document.getElementById("age");
var messageDiv = document.getElementById("Message");
var emp1 = document.getElementById("eg");
var employeeData = [];
var idcount=1;
function myFunc() {
    if (myname.value.trim()===""||prof.value.trim()=== ""||age.value.trim()==="") {
        messageDiv.innerHTML = "<span style='color: red;'>Error: Please make sure all fields are filled before adding an employee!</span>";
    }
    else if (!(age.value >= 0 && age.value <= 99)) {
        messageDiv.innerHTML = "<span style='color: red;'>Error: Age must be a numeric value!</span>";
    }
    else {
        messageDiv.innerHTML = "<span style='color: green;'>Success: Employee Added!</span>";
        var employee = {
            id:idcount,
            name: myname.value,
            profession: prof.value,
            age: age.value
        };
        employeeData.push(employee);
        renderEmployeeTable();
        cleartext(); 
        clearinput();
        attachDeleteHandler();
        idcount++;
    }
}
function renderEmployeeTable() {
    var infoDiv = document.getElementById("info");
    if (infoDiv) {
        infoDiv.parentNode.removeChild(infoDiv);
    }
    infoDiv = document.createElement("div");
    infoDiv.id = "info";
    var tableHTML = "<table class='tb'>";
    employeeData.forEach(function (employee) {
        tableHTML += `
            <tr>
                <td>${employee.id}</td>
                <td>Name: ${employee.name}</td>
                <td>Profession: ${employee.profession}</td>
                <td>Age: ${employee.age}</td>
                <td><button class="deleteBtn" type="button">Delete</button></td>
            </tr>
        `;
    });
    tableHTML += "</table>";
    infoDiv.innerHTML = tableHTML;
    document.body.appendChild(infoDiv);
    attachDeleteHandler();
}
function cleartext(){
    emp1.innerHTML="";
}
function clearinput() {
    myname.value = "";
    prof.value = "";
    age.value = "";
}
function clearMessage() {
    messageDiv.innerHTML = "";
}
function attachDeleteHandler() {
    var deleteButtons = document.querySelectorAll(".deleteBtn");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var row = this.closest("tr");
            row.parentNode.removeChild(row);
        });
    });
}
myname.addEventListener("input", clearMessage);
prof.addEventListener("input", clearMessage);
age.addEventListener("input", clearMessage);