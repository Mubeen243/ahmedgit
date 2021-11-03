function addtask() {
  // get alert if there is no input in  placeholder
  const newtask = document.getElementById("newtask").value;
  if (newtask.trim() === "") {
    alert("you must write something");
  }
  // appending the text in list
  else {
    const litag = document.createElement("li");
    const textnode = document.createTextNode(newtask.trim());
    const li = document.getElementById("mylist").appendChild(litag);
    li.append(textnode);
    document.getElementById("newtask").value = "";
    const dbton = document.getElementById("delbtn").cloneNode();
    li.appendChild(dbton);
    console.log(li);
  }
}
// click the delete button to delete items
function removetodo() {
  var deletetodo = document.querySelectorAll("#delbtn");
  for (var i = 0; i < deletetodo.length; i++) {
    deletetodo[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}

// const del = document.createElement("div").cloneNode();
// const btn = document.createTextNode("btn");
// del.classlist.addtask = "fa fa-trash-o";
// del.appendChild(btn);
