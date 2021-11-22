var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["phoneno"] = document.getElementById("phoneno").value;
    formData["city"] = document.getElementById("city").value;
    formData["country"] = document.getElementById("country").value;
    formData["pincode"] = document.getElementById("pincode").value;
    formData["education"] = document.getElementById("education").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneno;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.country;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.pincode;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.education;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("phoneno").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("education").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phoneno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("country").value = selectedRow.cells[4].innerHTML;
    document.getElementById("pincode").value = selectedRow.cells[5].innerHTML;
    document.getElementById("education").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.phoneno;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.country;
    selectedRow.cells[5].innerHTML = formData.pincode;
    selectedRow.cells[6].innerHTML = formData.education;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}