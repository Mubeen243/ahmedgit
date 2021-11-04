function addtask() {
  // get alert if there is no input in  placeholder
  const newtask = document.getElementById("newtask").value;
  if (newtask.trim() == "") {
    alert("you must write something");
  }
  // appending the text in list
  else {
    const litag = document.createElement("li");
    const textnode = document.createTextNode(newtask.trim());
    const li = document.getElementById("mylist").appendChild(litag);
    li.appendChild(textnode);
    document.getElementById("newtask").value = "";
    const delbtn = document.createElement("button");
    delbtn.classList = "fa fa-trash-o";
    delbtn.addEventListener("click", removetodo);
    li.appendChild(delbtn);

    litag.appendChild(li);
    console.log(li);
  }
}
// click the delete button to delete items
function removetodo() {
  var deletetodo = document.getElementsByTagName("button");
  console.log("this", this.parentNode);
  this.parentNode.remove();
}
