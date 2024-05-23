const data = [
    {
        name: "Rajahmundry",
        population: "12000000",
        pin: "533 102"
    }
]
const addFormData = {
    name: "",
    population: "",
    pin: ""
}
const addFormErrors = {
    name: "",
    population: "",
    pin: ""
}
var add_btn = document.getElementById("add_btn")
var edit_city_btn = document.getElementById("edit_city_btn")
var overlay = document.getElementById("overlay")
var edit_form = document.getElementById("editform")
var city_name = document.getElementById("city")
var population = document.getElementById("population")
var pin = document.getElementById("pin")
var edit_city_name = document.getElementById("edit_city")
var edit_population = document.getElementById("edit_population")
var edit_pin = document.getElementById("edit_pin")
var table = document.getElementById("table")

const addFormInputs = document.querySelectorAll(".add_form_input");
// Validatioin 
const handleChange = (e) => {
    var ele = e.target.name;
    console.log(ele)
    var data_ = e.target.value
    if (ele == "name") {
        const is_valid = data_.match(/^[a-z]+$/i)
        console.log(is_valid)
        if (!is_valid) {
            addFormErrors.name = "City Name should contains only alphabets & spaces"
            if (!data_) {
                addFormErrors.name = "This field is required !"
            }
        } else {
            addFormErrors.name = ""
        }
    }
    else if (ele == "population") {
        const is_valid = data_.match(/^[0-9]+$/)
        if (!is_valid) {
            addFormErrors.population = "Population should contain only numbers."
        } else {
            addFormErrors.population = ""
        }
    }

    else if (ele == "pin") {
        const is_valid = data_.match(/^[0-9]{6}$/)
        if (!is_valid) {
            addFormErrors.pin = "Pin code should contain only numbers."
        } else {
            addFormErrors.pin = ""
        }
    }
    renderErrors()
}

addFormInputs.forEach(element => {
    element.addEventListener('input', handleChange)
});
const renderErrors = () => {
    console.log(addFormErrors)
    if (addFormErrors.name) {
        city_name.style.borderColor = "red"
        document.getElementById("city_error").innerHTML = addFormErrors.name;
    } else {
        city_name.style.borderColor = "#6d6d6d"
        document.getElementById("city_error").innerHTML = addFormErrors.name;
    }
    if (addFormErrors.population) {
        population.style.borderColor = "red"
        document.getElementById("population_error").innerHTML = addFormErrors.population;
    } else {
        population.style.borderColor = "#6d6d6d"
        document.getElementById("population_error").innerHTML = addFormErrors.population;
    }
    if (addFormErrors.pin) {
        pin.style.borderColor = "red"
        document.getElementById("pin_error").innerHTML = addFormErrors.pin;

    } else {
        pin.style.borderColor = "#6d6d6d"
        document.getElementById("pin_error").innerHTML = addFormErrors.pin;
    }
}

add_btn.addEventListener("click", () => {
    overlay.style.display = "block";
    city_name.focus();
})
document.getElementById("close_modal").addEventListener("click", (e) => {
    resetForm();
    overlay.style.display = "none"
})
document.getElementById("close_edit_modal").addEventListener("click", (e) => {
    resetForm();
    edit_form.style.display = "none"
})
const resetForm = () => {
    city_name.value = ""
    population.value = ""
    pin.value = ""
}
function rerender() {
    table.innerHTML = `<tr>
    <th>City</th>
    <th>Population</th>
    <th>Pincode</th>
    <th>Action</th>
</tr>`
    console.log(data)
    for (i = 0; i < data.length; i++) {
        var row = document.createElement("tr")

        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");
        var c4 = document.createElement("td")
        c4.id = i;
        c1.innerHTML = data[i].name
        c2.innerHTML = data[i].population
        c3.innerHTML = data[i].pin;
        var b1 = document.createElement("button")
        b1.innerHTML = `<i class="bi bi-pen-fill" style = "color:white"></i>`
        b1.style.background = "#0A6847"
        b1.addEventListener("click", handleEdit)
        var b2 = document.createElement("button")
        b2.innerHTML = `<i class="bi bi-trash3-fill" style="color:white"></i>`
        b2.className = "delete-btn"
        b2.addEventListener("click", deleteItem)
        c4.appendChild(b1)
        c4.appendChild(b2)
        row.appendChild(c1);
        row.appendChild(c2)
        row.appendChild(c3);
        row.appendChild(c4)
        table.appendChild(row)
    }
}
const deleteItem = (e) => {
    //var temp = e.target.parentNode.id
    const bid = e.target.parentNode.id;
    data.splice(bid, 1);
    rerender()
}

const editItem = (e) => {
    var bid = e.target.id;
    bid = bid.replace("_", "")
    console.log("this is bad ass", data[bid]);
    data[bid].name = edit_city_name.value;
    data[bid].population = edit_population.value;
    data[bid].pin = edit_pin.value;
    rerender();
    edit_form.style.display = "none";
}
document.getElementById("add_city").addEventListener("click", () => {
    const city_data = {
        name: city_name.value,
        population: population.value,
        pin: pin.value
    }
    console.log(city_data)
    const isFormValid = Object.values(addFormErrors).some(value => {
        return value !== ""
    })
    const isNotEmpty = Object.values(city_data).some(value => {
        return value === ""
    })
    console.log("errors:", isFormValid)
    console.log("data:", !isNotEmpty)
    // if(isFormValid ||   !isNotEmpty){
    //     alert("Please give correct inputs");
    //     return;
    // }
    data.push(city_data);
    //console.log(data);
    rerender();
    resetForm();
    overlay.style.display = "none"

})

//Edit City
edit_city_btn.addEventListener("click", editItem);
const handleEdit = (e) => {
    const bid = e.target.parentNode.id;
    console.log(bid);
    const currentData = data[bid];
    edit_city_name.value = currentData.name;
    edit_population.value = currentData.population;
    edit_pin.value = currentData.pin;
    edit_city_btn.id = bid + "_";
    edit_form.style.display = "block"
}
rerender()