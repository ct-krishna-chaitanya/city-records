const state_data = [
    {
        state: "Andhra Pradesh",
        capital: "Amaravathi",
        cm: "Jagan"
    }
]



// Variables
var state_table = document.getElementById("state_table")
var add_state_btn = document.getElementById("add_state")
var add_state_from = document.getElementById("add_state_form")

var state_input = document.getElementById("state_input")
var capital_input = document.getElementById("capital_input")
var cm_input = document.getElementById("cm_input");

function rerender_state() {
    area_table.innerHTML = `<tr>
    <th>State</th>
    <th>Capital</th>
    <th>CM</th>
    <th style="margin: 0 auto;">Action</th>
</tr>`
    console.log(data)
    for (i = 0; i < state_data.length; i++) {
        var row = document.createElement("tr")
        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");
        var c4 = document.createElement("td")
        c4.id = "s_"+i;
        c1.innerHTML = state_data[i].state
        c2.innerHTML = state_data[i].capital
        c3.innerHTML = state_data[i].cm;
        var b1 = document.createElement("button")
        b1.innerHTML = `<i class="bi bi-pen-fill" style = "color:white"></i>`
        b1.style.background = "#0A6847"
        //b1.addEventListener("click", handleEdit)
        var b2 = document.createElement("button")
        b2.innerHTML = `<i class="bi bi-trash3-fill" style="color:white"></i>`
        b2.className = "delete-btn"
        //b2.addEventListener("click", deleteItem)
        c4.appendChild(b1)
        c4.appendChild(b2)
        row.appendChild(c1);
        row.appendChild(c2)
        row.appendChild(c3);
        row.appendChild(c4)
        state_table.appendChild(row)
    }
}

document.getElementById('add_state_btn').addEventListener("click", () => {
    add_state_from.style.display = "block";
    state_input.focus();
})
document.getElementById("close_state_modal").addEventListener("click", (e) => {
    resetStateForm();
    add_state_from.style.display = "none"
    
})
const resetStateForm = () => {
    state_input.value = ""
    capital_input.value = ""
    cm_input.value = ""
}
rerender_state()