function set() {
  console.log("Hi");
  const input = document.getElementById("ai-value").value;
  const taskList = [];
  const list = document.createElement("LI");
  list.className = "list-group-item";
  list.appendChild(document.createTextNode(input)); // Append the text to <li>
  document.getElementById("ai-list").appendChild(list);
  taskList.push(input);
  console.log(taskList);
  list.addEventListener(
    "click",
    function(e) {
      const doneList = e.target;
      doneList.classList.add("done"); //doneList.style.から変更
    },
    false
  );
}
