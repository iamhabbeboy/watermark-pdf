import { Helper } from '../enum/helper.enum';

export function Draggable(e: any, element: any) {
  // let currentResizer, isResizing;
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e: any) {
    // if (!isResizing) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    const { offsetLeft, offsetTop } = element;
    element.style.left = offsetLeft - newX + 'px';
    element.style.top = offsetTop - newY + 'px';
    const parentWidth = element.parentElement.offsetWidth,
      parentHeight = element.parentElement.offsetHeight;
    if (parseInt(element.style.left) < 0) {
      element.style.left = 0 + 'px';
    }
    if (parseInt(element.style.top) < 0) {
      element.style.top = 0 + 'px';
    }
    if (parseInt(element.style.left) > parentWidth) {
      element.style.left = parentWidth + 'px';
    }

    if (parseInt(element.style.top) > parentHeight) {
      element.style.top = parentHeight + 'px';
    }

    prevX = e.clientX;
    prevY = e.clientY;
  }

  function mouseup() {
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseup);
  }

  element.ondragstart = function () {
    return false;
  };
}
