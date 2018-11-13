function newTask() {
  var task = document.getElementById("newtask").value;
  var ul = document.getElementById("tasklist");
  var li = document.createElement("li");
  li.innerHTML = task;
  ul.appendChild(li);
  document.getElementById("newtask").value = "";
  li.onclick = function() {
    this.parentNode.removeChild(this);
  }
};

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newTask();
  }
};
