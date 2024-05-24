const area_data = [
    {
        area: "GO Colony",
        ward: "25",
        area_pin: "533102"
    }
]
var area_table = document.getElementById("area_table")
function rerender_area() {
    area_table.innerHTML = `<tr>
    <th>Area Name</th>
    <th>Ward Number</th>
    <th>Pin code</th>
    <th style="margin: 0 auto;">Action</th>
</tr>`
    console.log(data)
    for (i = 0; i < area_data.length; i++) {
        var row = document.createElement("tr")
        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");
        var c4 = document.createElement("td")
        c4.id = "a_"+i;
        c1.innerHTML = area_data[i].area
        c2.innerHTML = area_data[i].ward
        c3.innerHTML = area_data[i].area_pin;
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
        area_table.appendChild(row)
    }
}

rerender_area()