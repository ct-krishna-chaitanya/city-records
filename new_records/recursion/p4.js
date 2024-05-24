const data = [1,2,3,[2,3,4,[4,5]]]

function show(data) {
  if (typeof data == "object") {
    if (data.length) {
      console.log("this is the length", data, data.length);
      for (i = 0; i < data.length; i++) {
        if (typeof data[i] == "object") {
          show(data[i]);
        } else {
          console.log(data[i]);
          document.write(`<li>${data[i]}</li>`);
        }
      }
    }
    else {
      for (key in data) {
        document.write(`<li>${key}</li>`);
        document.write(`<ul>`);
        if (typeof data[key] !== "object") {
          document.write(`<li>${data[key]}</li>`);
        } else {
          console.log(data[key], "xxxxxxxxxxxxxxxx");
          show(data[key]);
        }
        document.write(`</ul>`);
      }
    }
  }

}

document.write(`<ul>`);
show(data);
document.write(`</ul>`);  