class ImageRenderer {
  constructor() {}

  get(canvas: Element) {
    return (document.querySelector('#preview').innerHTML =
      '<img src="' + canvas.toDataURL() + '"/>');
  }
}

export { ImageRenderer };
