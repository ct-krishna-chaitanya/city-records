const masterData = {
    state: ["state", "capital", "cm"],
    city: ["name", "population", "pin"],
    area: ["area", "ward"]
}

const masterValues = {
    state: [
        {
            state: "Andhra Pradesh",
            capital: "Amaravathi",
            cm: "Jagan"
        }
    ],
    city: [
        {
            name: "Rajahmundry",
            population: "5000000",
            pin: "533102"
        }
    ],
    area: [
        {
            area: "GO Colony",
            ward: "25",
        },
    ]
}

const area_data = [
    {
        area: "GO Colony",
        ward: "25",
    },
    {
        area: "kO Colony",
        ward: "25",
    }
]



function rerender_() {
    var table_list = Object.keys(masterData);
    console.log("starting f the render")
    //var table_list = ['area']
    for (k = 0; k < table_list.length; k++) {
        var table = document.getElementById(table_list[k] + "_table")
        table.innerHTML = ""
        var header_row = document.createElement("tr");
        masterData[table_list[k]].forEach(element => {
            var h_col = document.createElement("th");
            h_col.innerHTML = element
            header_row.appendChild(h_col)
        });
        var last_col = document.createElement("th")
        last_col.innerHTML = "Action";
        header_row.appendChild(last_col);
        table.appendChild(header_row);
        console.log(masterValues[table_list[k]], 'oooooooo')
        for (i = 0; i < masterValues[table_list[k]].length; i++) {
            var row = document.createElement("tr")
            console.log(masterData[table_list[k]], 'zzzzz')
            for (j = 0; j < masterData[table_list[k]].length; j++) {
                var col = document.createElement("td");

                console.log(masterValues[table_list[k]][i][masterData[table_list[k]][j]], 'xxx')
                //col.innerHTML = area_data[i][masterData.table_list[i][j]]
                col.innerHTML = masterValues[table_list[k]][i][masterData[table_list[k]][j]];
                row.appendChild(col)
            }
            //window.alert("this is ok")
            var lc = document.createElement("td")
            console.log(table_list[k],"this iis the row man")
            lc.id = table_list[k]+"_" + i;
            var b1 = document.createElement("button")
            b1.innerHTML = `<i class="bi bi-pen-fill" style = "color:white"></i>`
            b1.style.background = "#0A6847"
            b1.addEventListener("click", editItem)
            var b2 = document.createElement("button")
            b2.innerHTML = `<i class="bi bi-trash3-fill" style="color:white"></i>`
            b2.className = "delete-btn"
            b2.addEventListener("click", deleteItem)
            lc.appendChild(b1)
            lc.appendChild(b2)
            row.appendChild(lc);
            table.appendChild(row)
            //table.appendChild(row)
            //console.log("sdf")
        }
    }

}



// Add record
const handleSubmit = (e) => {
    e.preventDefault();
    var current = e.target.id
    current = current.replace("_btn", "")
    const fields = masterData[current];
    console.log(fields,"these are the fields")
    const values = {};
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];

        console.log(field+"_id")
        // console.log(`${field}_id`)
        const value = document.getElementById(field+"_id").value;
        console.log("xnxx",value)
        values[field] = value;
    }
    console.log(values)
    masterValues[current].push(values)
    console.log(masterValues[current])
    rerender_();
    document.getElementById('overlay').style.display = "none";
}

//open
const openForm = (e) => {
    const current_form = e.target.id.replace("_btn", "")
    document.getElementById('overlay').style.display = "block";
    document.getElementById("form_heading").innerHTML = `Add ${current_form}`
    const form = document.getElementById("add_form");
    document.querySelectorAll(".input_div").forEach(ele => {
        form.removeChild(ele)
    })
    //form.removeChild(document.getElementById("submit_div"))
    for (i = 0; i < masterData[current_form].length; i++) {
        var div = document.createElement("div")
        div.className = "input_div"
        var label_1 = document.createElement("label")
        label_1.innerHTML = masterData[current_form][i]
        label_1.style.margin = "5px 0 5px 0"
        var input = document.createElement("input")
        input.id = masterData[current_form][i] + "_id"
        input.type = "text"
        var label_2 = document.createElement("label")
        label_2.id = current_form + "_error";
        label_2.style.float = "right";
        label_2.style.color = "red";
        div.appendChild(label_1)
        div.appendChild(input)
        div.appendChild(label_2)
        form.appendChild(div)
    }
    // Submit button
    var div_ = document.createElement("div");
    div_.className = "input_div"

    var btn = document.createElement("button")
    btn.id = current_form + "_btn"
    btn.innerHTML = "Submit"
    btn.className = "btn-1 form_submit_btn"
    btn.addEventListener("click", handleSubmit)
    div_.appendChild(btn)
    form.appendChild(div_)

}

document.querySelectorAll(".open-form").forEach(element => {
    element.addEventListener("click", openForm)
})
const closeForm = () => {
    document.getElementById('overlay').style.display = "none";
}
document.getElementById("close_modal").addEventListener("click", closeForm)


// Delete Items
const deleteItem = (e) => {
    var bid = e.target.parentNode.id || e.target.parentNode.parentNode.id;
    const category = bid.split("_")[0]
    const id = bid.split("_")[1]
    masterValues[category].splice(id,1)

    console.log("Deleting this item",category)
    rerender_()
}

// Edit Item
const editItem = (e)=>{
    var bid = e.target.parentNode.id || e.target.parentNode.parentNode.id;
    const category = bid.split("_")[0]
    const id = bid.split("_")[1]
    console.log(category)
    const currentValues = masterValues[category][id]
    console.log(currentValues)
    document.getElementById('overlay').style.display = "block";
    document.getElementById("form_heading").innerHTML = `Edit ${category}`
    const form = document.getElementById("add_form");
    document.querySelectorAll(".input_div").forEach(ele => {
        form.removeChild(ele)
    })
}
rerender_();