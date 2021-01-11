class Opacity {
  element: Element;
  constructor(element: Element) {
    this.element = element;
  }

  set(value: number) {
    this.element.style.opacity = value;
  }
}

export { Opacity };
