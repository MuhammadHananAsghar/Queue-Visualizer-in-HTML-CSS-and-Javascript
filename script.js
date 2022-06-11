var queue = document.querySelector(".queue");
var enqueue = document.getElementById("enqueue");
var dequeue = document.getElementById("dequeue");
var reset = document.getElementById("reset");

reset.onclick = () => {
  queue.innerHTML = "";
};

enqueue.addEventListener("click", () => {
  if (queue.children.length < 10) {
    htmlData = queue.innerHTML;
    let cube = `<div class="cube" style="background-color: #FF4444;">${Math.floor(
      Math.random() * 101
    )}</div>`;
    cube += htmlData;
    queue.innerHTML = cube;
  } else {
    alert("Queue Overflow");
  }
});

dequeue.onclick = () => {
  if (queue.children.length > 0) {
    let nodesCollection = [];
    let nodes = queue.children;
    for (let i = 0; i < nodes.length; i++) {
      nodesCollection.push(nodes[i].outerHTML);
    }
    nodesCollection.pop();
    let html = "";
    for (let k = 0; k < nodesCollection.length; k++) {
      if (nodesCollection[k]) {
        html += nodesCollection[k];
      }
    }
    queue.innerHTML = html;
  } else {
    alert("Queue Underflow");
  }
};
