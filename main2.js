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
        var table = document.getElementById(table_list[k]+"_table")
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
        console.log(masterValues[table_list[k]],'oooooooo')
        for (i = 0; i < masterValues[table_list[k]].length; i++) {
            var row = document.createElement("tr")
            console.log(masterData[table_list[k]],'zzzzz')
            for (j = 0; j < masterData[table_list[k]].length; j++) {
                var col = document.createElement("td");

                console.log(masterValues[table_list[k]][i][masterData[table_list[k]][j]], 'xxx')
                //col.innerHTML = area_data[i][masterData.table_list[i][j]]
                col.innerHTML = masterValues[table_list[k]][i][masterData[table_list[k]][j]];
                row.appendChild(col)
                
            }
            //window.alert("this is ok")
            var lc = document.createElement("td")
            //lc.id = "area_" + i;
            var b1 = document.createElement("button")
            b1.innerHTML = `<i class="bi bi-pen-fill" style = "color:white"></i>`
            b1.style.background = "#0A6847"
            //b1.addEventListener("click", handleEdit)
            var b2 = document.createElement("button")
            b2.innerHTML = `<i class="bi bi-trash3-fill" style="color:white"></i>`
            b2.className = "delete-btn"
            //b2.addEventListener("click", deleteItem)
            lc.appendChild(b1)
            lc.appendChild(b2)
            row.appendChild(lc);
            table.appendChild(row)
            //table.appendChild(row)
            //console.log("sdf")
        }
    }
    
}

rerender_();