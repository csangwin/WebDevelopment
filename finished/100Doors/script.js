// Create a door and add it to the selected row
function createDoor (row) {
  var newDoor = document.createElement('div');
  newDoor.className = 'closedDoor';
  document.getElementById(row).appendChild(newDoor);
}
// Create an entire row of  num doors
function buildRow (num, row) {
  for (var i = 0; i < num; i++) {
    createDoor(row);
  }
}
// Create a 5 x 20 grid for 100 doors
function buildGrid () {
  for (var i = 1; i <= 5; i++) {
    var rowNum = "row" + i;
    buildRow(20, rowNum);
  }
}

buildGrid();

function reset () {
  var doors = document.getElementsByClassName("openDoor");
  while(doors.length > 0){
    doors[0].className = 'closedDoor';
  }
}

function toggleDoor (pass, door) {
  var row = "row" + Math.ceil(door / 20); // Should have row length as global
  var ind = (door % 20) - 1;
  if (ind == -1) {
    ind = 19;
  }
  var doorDiv = document.getElementById(row).childNodes[ind];
  if (doorDiv.className == 'openDoor') {
    doorDiv.className = 'closedDoor';
  } else {
    doorDiv.className = 'openDoor';
  }
  setTimeout(function() {
    if (door != 100) {
      byDoor(pass, door + 1);
    } else {
      byDoor(pass + 1, 1);
    }
  }, 10);
}

function byDoor (i = 1, d = 1) {
  var pass = i;
  var door = d;
  if (pass < 101) {
    if (d % i == 0) {
      toggleDoor(pass, door);
    } else {
      if (door != 100) {
        byDoor(pass, door + 1);
      } else {
        byDoor(pass + 1, 1);
      }
    }
  }
}
