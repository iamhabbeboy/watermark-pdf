class ImageRenderer {
  element: Element;
  constructor(element: Element) {
    this.element = element;
  }

  get(canvas: Element) {
    return (this.element.innerHTML = '<img src="' + canvas.toDataURL() + '"/>');
  }
}

export { ImageRenderer };
