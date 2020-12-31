const element = document.querySelector(".item");

function draggable(element) {
  element.addEventListener("mousedown", mousedown);
  let currentResizer, isResizing;

  function mousedown(e) {
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);
    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
      if (!isResizing) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;
        const rect = element.getBoundingClientRect();
        element.style.left = rect.left - newX + "px";
        element.style.top = rect.top - newY + "px";
        prevX = e.clientX;
        prevY = e.clientY;
      }
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
    }

    const resizers = document.querySelectorAll(".resizer");
    for (let resizer of resizers) {
      resizer.addEventListener("mousedown", mousedown);
      function mousedown(e) {
        currentResizer = e.target;
        isResizing = true;

        let prevX = e.clientX;
        let prevY = e.clientY;
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
        function mousemove(e) {
          const rect = element.getBoundingClientRect();
          if (currentResizer.classList.contains("se")) {
            element.style.width = rect.width - (prevX - e.clientX) + "px";
            element.style.height = rect.height - (prevY - e.clientY) + "px";
          } else if (currentResizer.classList.contains("sw")) {
            element.style.width = rect.width + (prevX - e.clientX) + "px";
            element.style.height = rect.height - (prevY - e.clientY) + "px";
            element.style.left = rect.left - (prevX - e.clientX) + "px";
          } else if (currentResizer.classList.contains("ne")) {
            element.style.width = rect.width - (prevX - e.clientX) + "px";
            element.style.height = rect.height + (prevY - e.clientY) + "px";
            element.style.top = rect.top - (prevY - e.clientY) + "px";
          } else {
            element.style.width = rect.width + (prevX - e.clientX) + "px";
            element.style.height = rect.height + (prevY - e.clientY) + "px";
            element.style.top = rect.top - (prevY - e.clientY) + "px";
            element.style.left = rect.left - (prevX - e.clientX) + "px";
          }
          prevX = e.clientX;
          prevY = e.clientY;
        }

        function mouseup() {
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
          isResizing = false;
        }
      }
    }
  }
}
