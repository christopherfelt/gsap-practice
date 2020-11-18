const container = document.querySelector(".drag-container");
const listTwo = document.getElementById("list-two");
const moveTask = document.getElementById("drag-square");

let taskInListTwo = false;

Draggable.create("#drag-square", {
  bounds: container,
  // liveSnap: {
  //   x: [0, 50, 100, 150],
  //   y: [0, 20, 40, 100],
  //   // we can also use this notation
  //   // points [{x: 0, y: 0}, {x: 30, y: 40}]
  // },
  onDrag: function () {
    if (this.hitTest(listTwo, 10)) {
      listTwo.style.border = "2px solid blue";
      taskInListTwo = true;
    } else {
      listTwo.style.border = "1px solid black";
      taskInListTwo = false;
    }
  },
  onDragEnd: function () {
    if (taskInListTwo) {
      moveTask.style.display = "none";
    }
  },
});
